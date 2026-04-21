import { Flex } from "@chakra-ui/react";
import GroupRow from "./GroupRow";

function GroupTable({teams}) {
    // Se ainda não tivermos times no grupo, criamos 4 espaços vazios só para manter o layout
    const displayTeams = teams?.length === 4 ? teams : [
        { nome: "A Definir", pontos: 0, token: 0 }, { nome: "A Definir", pontos: 0, token: 2 },
        { nome: "A Definir", pontos: 0, token: 1 }, { nome: "A Definir", pontos: 0, token: 3 }
    ];

    return (
        <Flex direction="column" gap={3} fontFamily="'Manrope', sans-serif">
        {displayTeams.map((team, index) => {
            return (<GroupRow team={team} index={index} key={team.token} />)
        })}
        
        </Flex>
    )
}

export default GroupTable;
   

