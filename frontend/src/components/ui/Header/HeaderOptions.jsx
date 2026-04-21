import { Box, HStack } from '@chakra-ui/react'

function HeaderOptions() {
    const navItems = ["Equipes", "Grupos", "Partidas", "Chaveamento"];

    return (
        <HStack gap={6} fontFamily="'Space Grotesk', sans-serif" textTransform="uppercase" fontWeight="bold" fontSize="sm">
        {navItems.map((item) => {
        
          const isActive = item === "Equipes"; 

          return (  
            <Box
              key={item}
              as="a"
              href="#"
              color={isActive ? "yellow.400" : "whiteAlpha.600"}
              borderBottom={isActive ? "2px solid" : "2px solid transparent"}
              borderColor={isActive ? "yellow.400" : "transparent"}
              pb={1}
              transition="all 0.2s"
              _hover={{ color: "yellow.300", bg: "whiteAlpha.100" }}
            >
              {item}
            </Box>
          );
        })}
      </HStack>
    )
    
}

export default HeaderOptions;