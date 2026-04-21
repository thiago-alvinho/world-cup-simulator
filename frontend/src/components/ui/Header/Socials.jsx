import { HStack, Box} from "@chakra-ui/react"

function Socials() {
    return (
        <HStack gap={4}>
            <Box as="button" color="yellow.400" _hover={{ color: "yellow.200" }} display="flex">
                <span className="material-symbols-outlined">settings</span>
            </Box>
            <Box as="button" color="yellow.400" _hover={{ color: "yellow.200" }} display="flex">
                <span className="material-symbols-outlined">history</span>
            </Box>
      </HStack>
    )
}

export default Socials;