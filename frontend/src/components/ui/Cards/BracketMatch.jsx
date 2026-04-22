import { Box, Flex, Text, Image } from "@chakra-ui/react";

export function BracketMatch({ match }) {
    // Se não passarem a partida (ainda não foi definida), renderiza o bloco vazio (TBD)
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

    // Lógica para descobrir quem venceu (para deixar o perdedor com opacidade menor)
    const t1Venceu = match.team1.score > match.team2.score;
    const t2Venceu = match.team2.score > match.team1.score;

    return (
        <Flex 
            direction="column" gap={2} p={3} w="220px"
            bg="#3b203d" borderRadius="xl" position="relative" zIndex={10} 
            boxShadow="lg" border="1px solid rgba(215, 186, 255, 0.05)"
        >
            {/* TIME 1 */}
            <Flex align="center" justify="space-between" opacity={!t1Venceu && match.status === "Finalizado" ? 0.5 : 1}>
                <Flex align="center" gap={3}>
                    <Box w={6} h={6} borderRadius="md" bg="#1c051f" overflow="hidden">
                        <Image src={match.team1.logo} alt={match.team1.name} w="full" h="full" objectFit="cover" />
                    </Box>
                    <Text fontFamily="'Manrope', sans-serif" fontWeight="bold" color="#fed6fc" fontSize="sm">
                        {match.team1.name}
                    </Text>
                </Flex>
                <Text fontFamily="'Space Grotesk', sans-serif" fontWeight="bold" fontSize="lg" color={t1Venceu ? "#d7baff" : "#cdc3d4"}>
                    {match.team1.score}
                </Text>
            </Flex>

            {/* Linha Divisória */}
            <Box h="1px" w="full" bg="rgba(150, 142, 157, 0.15)" />

            {/* TIME 2 */}
            <Flex align="center" justify="space-between" opacity={!t2Venceu && match.status === "Finalizado" ? 0.5 : 1}>
                <Flex align="center" gap={3}>
                    <Box w={6} h={6} borderRadius="md" bg="#1c051f" overflow="hidden">
                        <Image src={match.team2.logo} alt={match.team2.name} w="full" h="full" objectFit="cover" />
                    </Box>
                    <Text fontFamily="'Manrope', sans-serif" fontWeight="bold" color="#fed6fc" fontSize="sm">
                        {match.team2.name}
                    </Text>
                </Flex>
                <Text fontFamily="'Space Grotesk', sans-serif" fontWeight="bold" fontSize="lg" color={t2Venceu ? "#d7baff" : "#cdc3d4"}>
                    {match.team2.score}
                </Text>
            </Flex>
        </Flex>
    );
}

export default BracketMatch;