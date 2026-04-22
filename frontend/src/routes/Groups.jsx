import { Box } from '@chakra-ui/react'
import GroupsHero from '@/components/ui/Heroes/GroupsHero';
import GroupGrid from '@/components/ui/Table/GroupTable/GroupGrid';
import { getGroups, simulateGroupStage } from '@/services/api';
import { useState, useEffect } from 'react';

function Groups() {
    
    const [groups, setGroups] = useState([]);
    const [isSimulating, setIsSimulating] = useState(false);
    
      
        
    const fetchGroups = async () => {
      try {
        const dados = await getGroups();
        setGroups(dados);
        console.log('\nDados buscados dentro da função fetchGroups:',dados);
      } catch (error) {
        console.error(error);
      }

    }
    
      useEffect(() => {
      fetchGroups();
    }, []);
      
    const handleSimulate = async () => {
        setIsSimulating(true);
        try {
            const finalGroups = await simulateGroupStage();
            setGroups(finalGroups);
        } catch (error) {
            console.log("Erro na simulação");
        } finally {
            setIsSimulating(false);
        }
    }

    const campeonatoIniciado = groups.some(grupo => 
        grupo.teams.some(team => team.points > 0)
    );

    console.log(campeonatoIniciado);
    
    return (
        <Box 
            w="full" 
            maxW="7xl" 
            mx="auto" 
            px={4} 
            py={{ base: 8, md: 12 }} 
            display="flex" 
            flexDirection="column" 
            gap={8}
        >
            <GroupsHero 
                onClick={handleSimulate} 
                text={isSimulating ? 'Playing...' : 'Iniciar campeonato' }
                campeonatoIniciado={campeonatoIniciado}
            />
            <GroupGrid groups={groups} />
        </Box>
    )
}

export default Groups;