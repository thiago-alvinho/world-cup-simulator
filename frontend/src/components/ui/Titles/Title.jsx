import { Box, Heading, Text } from "@chakra-ui/react";

export function Title({ title, subtitle, align = "center", ...rest }) {
  return (
    <Box textAlign={align} {...rest}>
      <Heading
        as="h1"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        fontWeight="bold"
        letterSpacing="tight"
        color="#fed6fc"
        mb={2}
      >
        {title}
      </Heading>
      
      {/* Só renderiza o subtítulo se você passar um */}
      {subtitle && (
        <Text 
          fontSize="lg" 
          color="#cdc3d4"
          fontFamily="'Manrope', sans-serif"
        >
          {subtitle}
        </Text>
      )}
    </Box>
  );
}

export default Title;