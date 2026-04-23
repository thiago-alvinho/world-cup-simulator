import { Flex, Text } from '@chakra-ui/react'

function GroupRow({team, index}) {
    // variable used to give a different layout to the number one of the group
    const isSeed1 = index === 0;
    
    return (
        <Flex justify="space-between" align="center" bg="#2b122d" p={2} borderRadius="lg">
            <Flex align="center" gap={3}>
            
            <Flex
                w="6" h="6"
                borderRadius="md"
                bg={isSeed1 ? "rgba(233,195,73,0.2)" : "#462b48"}
                align="center" justify="center"
                fontSize="xs" fontWeight="bold"
                color={isSeed1 ? "#e9c349" : "#cdc3d4"}
            >
                {index + 1}
            </Flex>
            
            <Text fontWeight="bold" color="#fed6fc">{team.nome}</Text>
            </Flex>
            
            <Text color="#cdc3d4" fontFamily="'Space Grotesk', sans-serif" fontWeight="bold">
            {team.points} pts
            </Text>
        </Flex>
    )
}

export default GroupRow;