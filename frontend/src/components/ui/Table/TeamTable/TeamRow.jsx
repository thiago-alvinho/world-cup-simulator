import { Flex, Box, Text } from "@chakra-ui/react";

export function TeamRow({ team, index }) {
  // Se o index for par (0, 2, 4), usamos a cor mais clara. Se for ímpar, fica transparente.
  const isEven = index % 2 === 0;

  return (
    <Flex
      justify="space-between"
      align="center"
      py={4}
      px={4}
      bg={isEven ? "#3b203d" : "transparent"}
      borderRadius="xl"
      transition="all 0.2s"
      _hover={{ bg: "#462b48" }}
    >
      {/* Inicial e Nome */}
      <Flex align="center" gap={4} flex={1}>
        
        {/*Um círculo com a inicial do país */}
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
          color="#e9c349"
          fontSize="xl" 
          fontWeight="bold"
        >
          {team.ranking} 
        </Text>
      </Box>
    </Flex>
  );
}

export default TeamRow;