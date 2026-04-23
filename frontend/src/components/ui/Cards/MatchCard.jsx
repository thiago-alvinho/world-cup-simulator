import { Flex, Box, Text, Image } from "@chakra-ui/react";

export function MatchCard({ stage, status, team1, team2 }) {
    return (
        <Flex
            as="article"
            direction="column"
            gap={6}
            bg="#3b203d"
            p={{ base: 6, sm: 8 }}
            borderRadius="xl"
            boxShadow="0 24px 48px rgba(28,5,31,0.08)"
            position="relative"
            overflow="hidden"
        >
            <Box
                position="absolute"
                top="-16"
                right="-16"
                w="48"
                h="48"
                bg="rgba(74, 20, 140, 0.3)"
                borderRadius="full"
                filter="blur(40px)"
                pointerEvents="none"
            />

            {/* CARD HEADER: STAGE AND STATUS*/}
            <Flex justify="space-between" align="center" zIndex={10}>
                <Flex align="center" gap={2} color="#cdc3d4" fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="widest">
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>calendar_today</span>
                    <Text>{stage}</Text>
                </Flex>
                
                {/* Badge de "Finalizado" */}
                <Box 
                    bg="#462b48"
                    color="#fed6fc" 
                    px={3} py={1} 
                    borderRadius="full" 
                    fontSize="10px" 
                    fontWeight="bold" 
                    textTransform="uppercase"
                    boxShadow="inset 0 2px 4px rgba(0,0,0,0.1)"
                >
                    {status}
                </Box>
            </Flex>

            {/* TEAMS AND SCORE */}
            <Flex align="center" justify="space-between" zIndex={10}>
                
                {/* TEAM 1 */}
                <Flex direction="column" align="center" gap={4} w="33%">
                    <Box 
                        w={{ base: 16, sm: 20 }} h={{ base: 16, sm: 20 }} 
                        borderRadius="full" overflow="hidden" 
                        border="2px solid" borderColor="rgba(28, 5, 31, 0.5)" 
                        bg="#1c051f" p={1}
                    >
                        <Image src={team1.logo} alt={team1.name} w="full" h="full" objectFit="cover" borderRadius="full" />
                    </Box>
                    <Text fontFamily="'Manrope', sans-serif" fontSize={{ base: "md", sm: "lg" }} fontWeight="bold" color="#fed6fc" textAlign="center">
                        {team1.name}
                    </Text>
                </Flex>

                {/* SCORE */}
                <Flex align="center" justify="center" gap={{ base: 4, sm: 8 }} w="33%">
                    <Text fontFamily="'Space Grotesk', sans-serif" fontSize={{ base: "5xl", sm: "6xl" }} fontWeight="bold" color="#e9c349" textShadow="0 0 15px rgba(233,195,73,0.3)">
                        {team1.score}
                    </Text>
                    
                    {/* MARK BETWEEN SCORES */}
                    <Box h="1" w={{ base: 4, sm: 8 }} bg="rgba(74, 68, 82, 0.3)" borderRadius="full" />
                    
                    <Text fontFamily="'Space Grotesk', sans-serif" fontSize={{ base: "5xl", sm: "6xl" }} fontWeight="bold" color="#e9c349" textShadow="0 0 15px rgba(233,195,73,0.3)">
                        {team2.score}
                    </Text>
                </Flex>

                {/* TEAM 2 */}
                <Flex direction="column" align="center" gap={4} w="33%">
                    <Box 
                        w={{ base: 16, sm: 20 }} h={{ base: 16, sm: 20 }} 
                        borderRadius="full" overflow="hidden" 
                        border="2px solid" borderColor="rgba(28, 5, 31, 0.5)" 
                        bg="#1c051f" p={1}
                    >
                        <Image src={team2.logo} alt={team2.name} w="full" h="full" objectFit="cover" borderRadius="full" />
                    </Box>
                    <Text fontFamily="'Manrope', sans-serif" fontSize={{ base: "md", sm: "lg" }} fontWeight="bold" color="#fed6fc" textAlign="center">
                        {team2.name}
                    </Text>
                </Flex>

            </Flex>
        </Flex>
    );
}

export default MatchCard;