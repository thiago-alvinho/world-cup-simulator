import { Box, Heading, Text } from "@chakra-ui/react";

export function Title() {
  return (

    <Box textAlign="center" mb={12} mt={12}>
      <Heading
        as="h1"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize={{ base: "4xl", md: "5xl" }}
        fontWeight="bold"
        letterSpacing="tight"
        color="#fed6fc"
        mb={2}
      >
        SELEÇÕES CLASSIFICADAS
      </Heading>
      
      <Text 
        fontSize="lg" 
        color="#cdc3d4"
        fontFamily="'Manrope', sans-serif"
      >
        Confira o ranking oficial e prepare-se para o sorteio.
      </Text>
    </Box>
  );
}

export default Title;