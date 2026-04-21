import { Box } from "@chakra-ui/react";

function MatchesButton() {
    return (
        <Box
    as="button"
    mt={2} w="full"
    bg="rgba(70,43,72,0.4)" // surface-variant com transparência
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
    backdropFilter="blur(8px)" // Efeito de vidro que tem no seu Tailwind
>
    {/*<span className="material-symbols-outlined" style={{ fontSize: '18px' }}>calendar_month</span>*/}
    Partidas
</Box>
    )
}

export default MatchesButton;