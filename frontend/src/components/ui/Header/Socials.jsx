import { HStack, Box } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Socials() {
    return (
        <HStack gap={4}>
            
            <Box 
                as="a" 
                href="https://www.linkedin.com/in/thiago-alves-da-silva-a62127223/" 
                target="_blank" 
                rel="noopener noreferrer"
                color="yellow.400" 
                _hover={{ color: "yellow.200", transform: "scale(1.1)" }} 
                transition="all 0.2s"
                display="flex"
            >
                <FaLinkedin size={24} />
            </Box>

            <Box 
                as="a" 
                href="https://github.com/thiago-alvinho" 
                target="_blank" 
                rel="noopener noreferrer"
                color="yellow.400" 
                _hover={{ color: "yellow.200", transform: "scale(1.1)" }} 
                transition="all 0.2s"
                display="flex"
            >
                <FaGithub size={24} />
            </Box>

      </HStack>
    );
}

export default Socials;