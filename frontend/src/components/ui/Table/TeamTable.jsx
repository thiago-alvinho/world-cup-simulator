import { Box, Flex, Text } from "@chakra-ui/react";
import TeamRow from "./TeamRow";
import HeaderTable from "./HeaderTable.jsx";

export function TeamTable({ teams }) {
  
  if (!teams || teams.length === 0) return null;

  return (
    <Box 
      w="full" 
      maxW="4xl" 
      bg="#2b122d" // surface-container-low
      borderRadius="xl" 
      p={{ base: 6, md: 8 }}
      position="relative"
      mx='auto'
    >
      <Flex direction="column" gap={2}>
      

        <HeaderTable/>

        {teams.map((team, index) => (
          <TeamRow key={team.token} team={team} index={index} />
        ))}

      </Flex>

      {/* BOTÃO DOURADO DE FORMAR GRUPOS */}
      <Flex justify="center" mt={12}>
        <Box
          as="button"
          bg="#e9c349" // secondary
          color="#3c2f00" // on-secondary
          px={8}
          py={4}
          borderRadius="xl"
          fontFamily="'Space Grotesk', sans-serif"
          fontWeight="bold"
          textTransform="uppercase"
          letterSpacing="widest"
          fontSize="lg"
          boxShadow="0 8px 32px rgba(233,195,73,0.3)"
          transition="transform 0.3s"
          _hover={{ transform: "scale(1.05)" }}
          display="flex"
          alignItems="center"
          gap={3}
        >
          <span className="material-symbols-outlined icon-fill">casino</span>
          Formar Grupos
        </Box>
      </Flex>
    </Box>
  );
}

export default TeamTable;