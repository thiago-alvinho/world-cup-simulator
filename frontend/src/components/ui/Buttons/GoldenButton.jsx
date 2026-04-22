import {Flex, Box} from '@chakra-ui/react'

function GoldenButton({text, onClick}) {
    return (
    <Flex justify="center" mt={12}>
        <Box
            as='button'
            onClick={onClick}
            bg="#e9c349"
            color="#3c2f00"
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
            display="inline-flex"
            alignItems="center"
            gap={3}
        >
            {text}
        </Box>
    </Flex>
    )
}

export default GoldenButton;
