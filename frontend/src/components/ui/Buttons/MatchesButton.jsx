import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router"; // <-- Importamos o navegador

function MatchesButton({ groupName }) {
    const navigate = useNavigate();

    const handleVerPartidas = () => {
        const letraDoGrupo = groupName.replace("Group ", "");
        navigate(`/matches/${letraDoGrupo}`);
    };

    return (
        <Box
            as="button"
            onClick={handleVerPartidas}
            mt={2} w="full"
            bg="rgba(70,43,72,0.4)"
            _hover={{ bg: "rgba(70,43,72,0.6)" }}
            color="#d7baff"
            fontFamily="'Space Grotesk', sans-serif"
            textTransform="uppercase"
            fontSize="sm"
            py={2}
            borderRadius="lg"
            transition="colors 0.2s"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={2}
            backdropFilter="blur(8px)"
        >
            {/*<span className="material-symbols-outlined" style={{ fontSize: '18px' }}>calendar_month</span>*/}
            Partidas
        </Box>
    )
}

export default MatchesButton;