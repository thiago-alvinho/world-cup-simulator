import { Box, HStack } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

function HeaderOptions() {
    const location = useLocation();
    const navItems = [
        { label: "Teams", path: "/" },
        { label: "Groups", path: "/groups" },
        { label: "Matches", path: "/matches/A" },
        { label: "Tournament Bracket", path: "/bracket" }
    ];

    // VARIABLE USED TO GIVE A GOLDEN EFFECT TO THE SELECTED PAGE: TEAMS, GROUPS, MATCHES OR TOURNAMENT BRACKET
    const checkIsActive = (itemPath, currentPath) => {
        if (itemPath === "/") {
            return currentPath === "/";
        }
        if (itemPath.startsWith("/matches")) {
            return currentPath.startsWith("/matches");
        }
        return currentPath.startsWith(itemPath);
    };

    return (
        <HStack gap={6} fontFamily="'Space Grotesk', sans-serif" textTransform="uppercase" fontWeight="bold" fontSize="sm">
            {navItems.map((item) => {
                
                const isActive = checkIsActive(item.path, location.pathname);

                return (
                    <Box
                        key={item.label}
                        as={Link}
                        to={item.path}
                        color={isActive ? "#e9c349" : "whiteAlpha.600"}
                        borderBottom={isActive ? "2px solid" : "2px solid transparent"}
                        borderColor={isActive ? "#e9c349" : "transparent"}
                        pb={1}
                        transition="all 0.2s"
                        _hover={{ color: "#ffe088", bg: "whiteAlpha.100" }}
                        px={2}
                        borderRadius="md"
                    >
                        {item.label}
                    </Box>
                );
            })}
        </HStack>
    );
}

export default HeaderOptions;