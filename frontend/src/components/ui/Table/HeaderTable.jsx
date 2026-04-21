import { Flex, Text } from '@chakra-ui/react'

function HeaderTable() {
    return (
        <Flex 
          justify="space-between" 
          align="center" 
          py={3} 
          px={4} 
          color="#cdc3d4" // on-surface-variant
          fontFamily="'Space Grotesk', sans-serif" 
          textTransform="uppercase" 
          fontSize="sm" 
          letterSpacing="wider" 
          fontWeight="semibold" 
          borderBottom="1px solid" 
          borderColor="#4a4452" // outline-variant
        >
          <Text flex={1}>Seleção</Text>
          <Text w="24" textAlign="right">Ranking FIFA</Text>
        </Flex>
    )
}

export default HeaderTable;
