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
        const data = await getGroups();
        setGroups(data);
      } catch (error) {
        console.error("There's been an error getting groups", error);
        navigate('/error');
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
            localStorage.setItem('@worldcup:groupStageOk', 'true');
        } catch (error) {
            console.error("There's been an error simulating group stage", error);
                navigate('/error');
        } finally {
            setIsSimulating(false);
        }
    }

    const tournamentAlreadyStarted = groups.some(grupo => 
        grupo.teams.some(team => team.points > 0)
    );
    
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
                text={isSimulating ? 'Playing...' : 'Start tournament' }
                tournamentAlreadyStarted={tournamentAlreadyStarted}
            />
            <GroupGrid groups={groups} />
        </Box>
    )
}

export default Groups;