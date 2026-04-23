import { Flex } from "@chakra-ui/react";
import GroupRow from "./GroupRow";

function GroupTable({teams}) {
    // If there's not teams in the group yet, just to keep the layout
    const displayTeams = teams?.length === 4 ? teams : [
        { nome: "TBD", pontos: 0, token: 0 }, { nome: "TBD", pontos: 0, token: 2 },
        { nome: "TBD", pontos: 0, token: 1 }, { nome: "TBD", pontos: 0, token: 3 }
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
   

