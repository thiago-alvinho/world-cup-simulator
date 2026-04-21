import { Box } from '@chakra-ui/react'
import GroupsHero from '@/components/ui/Heroes/GroupsHero';
import GroupGrid from '@/components/ui/Table/GroupTable/GroupGrid';
import { getGroups } from '@/services/api';
import { useState, useEffect } from 'react';

function Groups() {
    
    const [groups, setGroups] = useState([]);
    
      useEffect(() => {
        
        const fetchGroups = async () => {
          try {
            const dados = await getGroups();
            setGroups(dados);
            console.log(dados);
          } catch (error) {
            console.error(error);
          }
    
        }
    
        fetchGroups();
      }, []);  
    
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
            <GroupsHero/>
            <GroupGrid groups={groups} />
        </Box>
    )
}

export default Groups;