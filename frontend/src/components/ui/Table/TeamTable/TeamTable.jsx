import { Box, Flex, Text } from "@chakra-ui/react";
import TeamRow from "./TeamRow";
import HeaderTable from "./HeaderTable.jsx";
import GoldenButton from "../../Buttons/GoldenButton";

export function TeamTable({ teams }) {
  
  if (!teams || teams.length === 0) return null;

  return (
    <Box 
      w="full" 
      maxW="4xl" 
      bg="#2b122d"
      borderRadius="xl" 
      p={{ base: 6, md: 8 }}
      position="relative"
      mx='auto'
      mt={10}
    >
      <Flex direction="column" gap={2}>
      

        <HeaderTable/>

        {teams.map((team, index) => (
          <TeamRow key={team.token} team={team} index={index} />
        ))}

      </Flex>

    </Box>
  );
}

export default TeamTable;