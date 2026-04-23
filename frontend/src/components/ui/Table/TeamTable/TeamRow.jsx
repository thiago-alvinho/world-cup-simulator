import { Flex, Box, Text, Image } from "@chakra-ui/react";

export function TeamRow({ team, index }) {
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
      {/* FLAG AND NAME */}
      <Flex align="center" gap={4} flex={1}>
        <Box 
          w="8" h="8" 
          borderRadius="full" 
          overflow="hidden"
          bg="#1c051f" 
          shadow="sm"
          flexShrink={0}
        >
          <Image 
            src={team.code 
              ? `https://flagcdn.com/w80/${team.code}.png` 
              : `https://ui-avatars.com/api/?name=${team.nome}&background=1c051f&color=fed6fc&bold=true`
            } 
            alt={`Bandeira de ${team.nome}`} 
            w="full" 
            h="full" 
            objectFit="cover"
          />
        </Box>
        
        <Text fontWeight="bold" fontSize="lg" color="white">
          {team.nome}
        </Text>
      </Flex>

      {/* Ranking */}
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