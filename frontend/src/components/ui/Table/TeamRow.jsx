import { Flex, Box, Text } from "@chakra-ui/react";

export function TeamRow({ team, index }) {
  // O seu design alterna a cor de fundo das linhas (Zebra pattern)
  // Se o index for par (0, 2, 4), usamos a cor mais clara. Se for ímpar, fica transparente.
  const isEven = index % 2 === 0;

  return (
    <Flex
      justify="space-between"
      align="center"
      py={4}
      px={4}
      bg={isEven ? "#3b203d" : "transparent"} // surface-container-high
      borderRadius="xl"
      transition="all 0.2s"
      _hover={{ bg: "#462b48" }} // surface-container-highest
    >
      {/* Lado Esquerdo: Bandeira e Nome */}
      <Flex align="center" gap={4} flex={1}>
        
        {/* Fallback da Bandeira: Um círculo com a inicial do país */}
        <Box 
          w="8" h="8" 
          borderRadius="full" 
          bg="purple.600" 
          color="white"
          display="flex" 
          alignItems="center" 
          justifyContent="center" 
          fontWeight="bold"
          shadow="sm"
        >
          {team.nome.charAt(0)}
        </Box>
        
        <Text fontWeight="bold" fontSize="lg" color="white">
          {team.nome}
        </Text>
      </Flex>

      {/* Lado Direito: Ranking */}
      <Box w="24" textAlign="right">
        <Text 
          fontFamily="'Space Grotesk', sans-serif" 
          color="#e9c349" // secondary (amarelo/dourado)
          fontSize="xl" 
          fontWeight="bold"
        >
          {/* Pegamos o ranking ou fifaPoints, dependendo de como está na sua API */}
          {team.ranking} 
        </Text>
      </Box>
    </Flex>
  );
}

export default TeamRow;