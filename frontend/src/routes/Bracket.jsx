import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Title from "../components/ui/Titles/Title";
import GoldenButton from "../components/ui/Buttons/GoldenButton";
import { useState, useEffect } from "react";
import BracketMatch from "@/components/ui/Cards/BracketMatch";
import { getBracketResults } from '../services/api';
import '../main.css'

function Bracket() {
    const [bracketData, setBracketData] = useState(null);

    const [bracketOk, setbracketOk] = useState(() => localStorage.getItem('@worldcup:bracketOk') === 'true');
    const [isRevealed, setIsRevealed] = useState(() => localStorage.getItem('@worldcup:championRevealed') === 'true');

    useEffect(() => {
        const fetchBracket = async () => {
            
            if(!bracketOk) {
                setBracketData({
                    roundOf16: Array(8).fill(null),
                    quarterFinals: Array(4).fill(null),
                    semiFinals: Array(2).fill(null),
                    finalMatch: Array(1).fill(null)
                });

                return;
            }
            
            try {
                const results = await getBracketResults();
                setBracketData(results);
            } catch (error) {
                console.error("There's been an error getting bracket results", error);
                navigate('/error');
            }
        };

        fetchBracket();
    }, [bracketOk]);

    const handleFIndOutChampion = () => {
        setIsRevealed(true);
        localStorage.setItem('@worldcup:championRevealed', 'true');
    };

    const matchFinal = bracketData?.finalMatch?.[0];

    let championName = "";
    let championIcon = "";

    if (matchFinal) {
        const isTeamAVencedor = matchFinal.winner === matchFinal.equipeA;
        championName = isTeamAVencedor ? matchFinal.nomeEquipeA : matchFinal.nomeEquipeB;

        if (isTeamAVencedor) {
            championIcon = matchFinal.codeEquipeA
                ? `https://flagcdn.com/w80/${matchFinal.codeEquipeA}.png`
                : `https://ui-avatars.com/api/?name=${championName}&background=1c051f&color=fed6fc&bold=true`;
        } else {
            championIcon = matchFinal.codeEquipeB
                ? `https://flagcdn.com/w80/${matchFinal.codeEquipeB}.png`
                : `https://ui-avatars.com/api/?name=${championName}&background=1c051f&color=fed6fc&bold=true`;
        }
    }
    return (
        <Box 
            w="full" maxW="full" mx="auto" pt={{ base: 8, md: 12 }} pb={32} 
            display="flex" flexDirection="column" gap={10} overflow="hidden" 
        >
            <Flex direction="column" align="center" gap={8} px={4}>
                <Box textAlign="center">
                    <Title title="FINAL STAGE" subtitle="THE PATH TO THE ETERNAL GLORY" mb={0} mt={0} />
                </Box>
                
                {!isRevealed && (
                    <GoldenButton 
                        text="Reveal champion" 
                        icon="emoji_events"
                        onClick={handleFIndOutChampion}
                    />
                )}
            </Flex>

            <Box 
                w="full" 
                maxW="8xl" 
                mx="auto" 
                overflowX="auto" 
                px={4} 
                py={8} 
                className="bracket-container"
            >
                <Flex minW="1400px" h="800px" justify="space-between" align="stretch" gap={6} position="relative">
                    
                    {/* COLUMN 1: ROUND OF 16 LEFT */}
                    <Flex direction="column" justify="space-around" h="full">
                        <BracketMatch match={bracketData?.roundOf16?.[0]} isRevealed={isRevealed} />
                        <BracketMatch match={bracketData?.roundOf16?.[1]} isRevealed={isRevealed} />
                        <BracketMatch match={bracketData?.roundOf16?.[2]} isRevealed={isRevealed} />
                        <BracketMatch match={bracketData?.roundOf16?.[3]} isRevealed={isRevealed} />
                    </Flex>

                    {/* COLUMN 2: QUARTERFINALS LEFT */}
                    <Flex direction="column" justify="space-around" h="full">
                        <BracketMatch match={isRevealed ? bracketData?.quarterFinals?.[0] : null} isRevealed={isRevealed} />
                        <BracketMatch match={isRevealed ? bracketData?.quarterFinals?.[1] : null} isRevealed={isRevealed} />
                    </Flex>

                    {/* COLUMN 3: SEMIFINAL LEFT */}
                    <Flex direction="column" justify="space-around" h="full">
                        <BracketMatch match={isRevealed ? bracketData?.semiFinals?.[0] : null} isRevealed={isRevealed} />
                    </Flex>

                    {/* COLUMN 4: CHAMPION AND FINAL */}
                    <Flex direction="column" justify="center" align="center" h="full" px={4} gap={10}>
                        
                        {/* 1. TROPHY */}
                        {isRevealed && matchFinal && championName ? (
                            <Flex 
                                direction="column" align="center" gap={4} p={6} borderRadius="xl"
                                bgGradient="linear(to-br, #af8d11, #3b203d)" border="1px solid rgba(233, 195, 73, 0.2)"
                                boxShadow="0 0 60px rgba(175,141,17,0.2)" transform="scale(1.1)" zIndex={20}
                            >
                                <span className="material-symbols-outlined text-5xl" style={{ color: '#e9c349', fontVariationSettings: "'FILL' 1" }}>
                                    emoji_events
                                </span>
                                <Flex direction="column" align="center" gap={2}>
                                    <Box w={16} h={16} borderRadius="full" overflow="hidden" border="2px solid #e9c349" boxShadow="lg" bg="#1c051f">
                                        <Image src={championIcon} alt="Campeão" w="full" h="full" objectFit="cover" />
                                    </Box>
                                    <Text fontFamily="'Space Grotesk', sans-serif" fontSize="2xl" fontWeight="bold" color="#e9c349" textTransform="uppercase" letterSpacing="widest">
                                        {championName}
                                    </Text>
                                    <Text fontFamily="'Manrope', sans-serif" fontSize="sm" color="#cdc3d4" textTransform="uppercase" letterSpacing="widest">
                                        Champion
                                    </Text>
                                </Flex>
                            </Flex>
                        ) : (
                            <Flex 
                                direction="column" align="center" gap={4} p={6} borderRadius="xl" bg="#2b122d" 
                                border="1px solid rgba(150, 142, 157, 0.1)" opacity={0.5} transform="scale(1.1)" zIndex={20}
                            >
                                <span className="material-symbols-outlined text-5xl" style={{ color: '#cdc3d4' }}>help_outline</span>
                                <Flex direction="column" align="center" gap={2}>
                                    <Box w={16} h={16} borderRadius="full" bg="#1c051f" border="2px solid #4a4452" />
                                    <Text fontFamily="'Space Grotesk', sans-serif" fontSize="2xl" fontWeight="bold" color="#cdc3d4" textTransform="uppercase" letterSpacing="widest">
                                        To be decided
                                    </Text>
                                </Flex>
                            </Flex>
                        )}

                        {/* 2. FINAL MATCH UNDER THE CHAMPION */}
                        <BracketMatch match={isRevealed ? matchFinal : null} isRevealed={isRevealed} />

                    </Flex>

                    {/* COLUMN 5: SEMIFINAL RIGHT */}
                    <Flex direction="column" justify="space-around" h="full">
                        <BracketMatch match={isRevealed ? bracketData?.semiFinals?.[1] : null} isRevealed={isRevealed} />
                    </Flex>

                    {/* COLUMN 6: QUARTERFINALS RIGHT */}
                    <Flex direction="column" justify="space-around" h="full">
                        <BracketMatch match={isRevealed ? bracketData?.quarterFinals?.[2] : null} isRevealed={isRevealed} />
                        <BracketMatch match={isRevealed ? bracketData?.quarterFinals?.[3] : null} isRevealed={isRevealed} />
                    </Flex>

                    {/* COLUMN 7: ROUND OF 16 RIGHT */}
                    <Flex direction="column" justify="space-around" h="full">
                        <BracketMatch match={bracketData?.roundOf16?.[4]} isRevealed={isRevealed} />
                        <BracketMatch match={bracketData?.roundOf16?.[5]} isRevealed={isRevealed} />
                        <BracketMatch match={bracketData?.roundOf16?.[6]} isRevealed={isRevealed} />
                        <BracketMatch match={bracketData?.roundOf16?.[7]} isRevealed={isRevealed} />
                    </Flex>

                </Flex>
            </Box>
        </Box>
    );
}

export default Bracket;