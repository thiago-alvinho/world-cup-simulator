import { Box, Text } from "@chakra-ui/react";

function GlassButton({ text, onClick, icon, ...rest }) {
    return (
        <Box
            as="button"
            onClick={onClick}
            display="flex"
            alignItems="center"
            gap={2}
            px={4}
            py={2}
            bg="rgba(70,43,72,0.4)"
            backdropFilter="blur(8px)"
            borderRadius="full"
            color="#fed6fc"
            transition="all 0.2s"
            _hover={{ bg: "rgba(70,43,72,0.6)", transform: "translateX(-4px)" }}
            {...rest}
        >
            {icon && (
                <span className="material-symbols-outlined text-sm">
                    {icon}
                </span>
            )}
            
            <Text fontFamily="'Manrope', sans-serif" fontSize="sm" fontWeight="bold" letterSpacing="wide">
                {text}
            </Text>
        </Box>
    );
}

export default GlassButton;