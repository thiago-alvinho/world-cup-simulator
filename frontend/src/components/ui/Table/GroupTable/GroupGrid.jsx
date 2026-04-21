import { SimpleGrid } from "@chakra-ui/react"
import GroupCard from "../../Cards/GroupCard";

function GroupGrid ({groups}) {
    return (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6}>
        
        {groups.map((group) => (
          <GroupCard
            key={group.name}
            groupName={group.name} 
            teams={group.teams} 
          />
        ))}

      </SimpleGrid>
    )
}

export default GroupGrid;