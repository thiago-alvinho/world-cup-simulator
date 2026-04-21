import { Box, Flex, Heading } from "@chakra-ui/react";
import MatchesButton from "../Buttons/MatchesButton";
import GroupTable from "../Table/GroupTable/GroupTable";

export function GroupCard({ groupName, teams }) {

  return (
    <Flex
        direction="column"
        gap={4}
        bg="#3b203d"
        p={5}
        borderRadius="xl"
        boxShadow="0 8px 32px rgba(28,5,31,0.4)"
        position="relative"
    >
        {/* HEADER DO GRUPO */}
        <Flex justify="space-between" align="center" pb={2} borderBottom="1px solid" borderColor="#4a4452">
        <Heading fontFamily="'Space Grotesk', sans-serif" fontSize="xl" fontWeight="bold" color="#fed6fc">
            {groupName}
        </Heading>
        {/* Ícone da Bola */}
        <Box color="#d7baff" opacity={0.5}>
            {/*<span className="material-symbols-outlined text-3xl">sports_soccer</span>*/}
        </Box>
        </Flex>

        {/* LISTA DE TIMES */}
        <GroupTable teams={teams}/>
        
        {/* BOTÃO DE PARTIDAS (Rodapé do Card) */}
        <MatchesButton />
    </Flex>
  );
}

export default GroupCard;