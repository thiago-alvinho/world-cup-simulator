import { Box, Text} from '@chakra-ui/react'

function Logo() {
    return (
    <Box>
        <Text
            fontFamily="'Space Grotesk', sans-serif"
            fontSize="2xl"
            fontWeight="black"
            color="yellow.400"
            letterSpacing="tighter"
            >
            World-cup simulator
        </Text>
    </Box>
    )
}

export default Logo