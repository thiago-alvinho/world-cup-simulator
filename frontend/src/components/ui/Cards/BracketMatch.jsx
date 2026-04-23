import { Box, Flex, Text, Image } from "@chakra-ui/react";

export function BracketMatch({ match, isRevealed }) {
    // IF MATCH IS NULL, TBD IS RENDERIZED
    if (!match) {
        return (
            <Flex direction="column" gap={2} bg="#2b122d" p={3} borderRadius="xl" opacity={0.4} w="220px">
                <Flex align="center" gap={3} h={6}>
                    <Box w={6} h={6} borderRadius="md" bg="#1c051f" />
                    <Text fontFamily="'Manrope', sans-serif" fontWeight="bold" color="#fed6fc">TBD</Text>
                </Flex>
                <Box h="1px" w="full" bg="rgba(150, 142, 157, 0.15)" />
                <Flex align="center" gap={3} h={6}>
                    <Box w={6} h={6} borderRadius="md" bg="#1c051f" />
                    <Text fontFamily="'Manrope', sans-serif" fontWeight="bold" color="#fed6fc">TBD</Text>
                </Flex>
            </Flex>
        );
    }

    // VARIABLES USED TO REVEAL RESULTS JUST WHEN THE USER CLICK ON "REVEAL CHAMPION"
    const scoreA = isRevealed ? match.golsEquipeA : 0;
    const scoreB = isRevealed ? match.golsEquipeB : 0;
    
    const hasPenalties = isRevealed && (match.golsPenaltyTimeA > 0 || match.golsPenaltyTimeB > 0);
    
    const teamAWon = isRevealed && match.winner === match.equipeA;
    const teamBWon = isRevealed && match.winner === match.equipeB;

    const iconTeamA = 
        match.codeEquipeA 
        ? `https://flagcdn.com/w80/${match.codeEquipeA}.png` 
        : `https://ui-avatars.com/api/?name=${match.nomeEquipeA}&background=1c051f&color=fed6fc&bold=true`

    const iconTeamB =
        match.codeEquipeB
        ? `https://flagcdn.com/w80/${match.codeEquipeB}.png` 
        : `https://ui-avatars.com/api/?name=${match.nomeEquipeB}&background=1c051f&color=fed6fc&bold=true`

    return (
        <Flex 
            direction="column" gap={2} p={3} w="220px"
            bg="#3b203d" borderRadius="xl" position="relative" zIndex={10} 
            boxShadow="lg" border="1px solid rgba(215, 186, 255, 0.05)"
        >
            {/* TEAM A */}
            <Flex align="center" justify="space-between" opacity={!teamAWon && isRevealed ? 0.5 : 1}>
                <Flex align="center" gap={3}>
                    <Box w={6} h={6} borderRadius="md" bg="#1c051f" overflow="hidden">
                        <Image src={iconTeamA} w="full" h="full" objectFit="cover" />
                    </Box>
                    <Text fontFamily="'Manrope', sans-serif" fontWeight="bold" color="#fed6fc" fontSize="sm" isTruncated maxW="100px">
                        {match.nomeEquipeA}
                    </Text>
                </Flex>
                
                <Flex align="center" gap={2}>
                    {/* PENALTIES BADGE */}
                    {hasPenalties && (
                        <Text fontSize="10px" color={teamAWon ? "#e9c349" : "gray.500"} fontWeight="bold">
                            ({match.golsPenaltyTimeA})
                        </Text>
                    )}
                    <Text fontFamily="'Space Grotesk', sans-serif" fontWeight="bold" fontSize="lg" color={teamAWon ? "#d7baff" : "#cdc3d4"}>
                        {scoreA}
                    </Text>
                </Flex>
            </Flex>

            <Box h="1px" w="full" bg="rgba(150, 142, 157, 0.15)" />

            {/* TEAM B */}
            <Flex align="center" justify="space-between" opacity={!teamBWon && isRevealed ? 0.5 : 1}>
                <Flex align="center" gap={3}>
                    <Box w={6} h={6} borderRadius="md" bg="#1c051f" overflow="hidden">
                        <Image src={iconTeamB} w="full" h="full" objectFit="cover" />
                    </Box>
                    <Text fontFamily="'Manrope', sans-serif" fontWeight="bold" color="#fed6fc" fontSize="sm" isTruncated maxW="100px">
                        {match.nomeEquipeB}
                    </Text>
                </Flex>
                
                <Flex align="center" gap={2}>
                    {/* PENALTIES BADGE */}
                    {hasPenalties && (
                        <Text fontSize="10px" color={teamBWon ? "#e9c349" : "gray.500"} fontWeight="bold">
                            ({match.golsPenaltyTimeB})
                        </Text>
                    )}
                    <Text fontFamily="'Space Grotesk', sans-serif" fontWeight="bold" fontSize="lg" color={teamBWon ? "#d7baff" : "#cdc3d4"}>
                        {scoreB}
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default BracketMatch;