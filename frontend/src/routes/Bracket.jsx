import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Title from "../components/ui/Titles/Title";
import GoldenButton from "../components/ui/Buttons/GoldenButton";
import { useState } from "react";
import BracketMatch from "@/components/ui/Cards/BracketMatch";

function Bracket() {
    const [isSimulating, setIsSimulating] = useState(false);

    const handleIniciarMataMata = async () => {
        setIsSimulating(true);
        // Aqui chamaremos a API futuramente
        console.log("Iniciando o mata-mata...");
        setTimeout(() => setIsSimulating(false), 2000); // Mock de delay
    };

    return (
        <Box 
            w="full" 
            maxW="full" // Usamos full aqui porque o bracket precisa de muito espaço
            mx="auto" 
            pt={{ base: 8, md: 12 }} 
            pb={32} // Espaço extra no fundo
            display="flex" 
            flexDirection="column" 
            gap={10}
            overflow="hidden" // Impede que a página inteira quebre a barra de rolagem
        >
            {/* 1. HERO SECTION (Títulos e Botão) */}
            <Flex direction="column" align="center" gap={8} px={4}>
                <Box textAlign="center">
                    <Title 
                        title="FASE FINAL" 
                        subtitle="O caminho para a glória eterna" 
                        mb={0} mt={0} 
                    />
                </Box>
                
                <GoldenButton 
                    text={isSimulating ? "Simulando..." : "Iniciar Confrontos"} 
                    icon="play_arrow"
                    onClick={handleIniciarMataMata}
                />
            </Flex>

            {/* 2. ÁREA DO CHAVEAMENTO (Scroll Horizontal) */}

            {/* 2. ÁREA DO CHAVEAMENTO (Scroll Horizontal) */}
            <Box w="full" maxW="8xl" mx="auto" overflowX="auto" px={4} py={8} className="bracket-container">
                
                {/* O palco precisa ter no mínimo 1400px para caber 7 colunas de 220px + espaçamentos sem esmagar */}
                <Flex minW="1400px" h="800px" justify="space-between" align="stretch" gap={6} position="relative">
                    
                    {/* COLUNA 1: Oitavas Esquerda (4 jogos) */}
                    <Flex direction="column" justify="space-around" h="full">
                        <BracketMatch match={{ team1: { name: "Brasil", score: 2, logo: "https://flagcdn.com/w40/br.png" }, team2: { name: "C. do Sul", score: 0, logo: "https://flagcdn.com/w40/kr.png" }, status: "Finalizado" }} />
                        <BracketMatch match={null} />
                        <BracketMatch match={null} />
                        <BracketMatch match={null} />
                    </Flex>

                    {/* COLUNA 2: Quartas Esquerda (2 jogos) */}
                    {/* Repare que elas vão se alinhar sozinhas no meio das de cima! */}
                    <Flex direction="column" justify="space-around" h="full">
                        <BracketMatch match={null} />
                        <BracketMatch match={null} />
                    </Flex>

                    {/* COLUNA 3: Semi Esquerda (1 jogo) */}
                    <Flex direction="column" justify="space-around" h="full">
                        <BracketMatch match={null} />
                    </Flex>

                    {/* COLUNA 4: O GRANDE CAMPEÃO (Centro) */}
                    <Flex direction="column" justify="center" align="center" h="full" px={4}>
                        {/* Nodo do Campeão baseado no seu design */}
                        <Flex 
                            direction="column" align="center" gap={4} p={6} borderRadius="xl"
                            bgGradient="linear(to-br, #af8d11, #3b203d)" 
                            border="1px solid rgba(233, 195, 73, 0.2)"
                            boxShadow="0 0 60px rgba(175,141,17,0.2)"
                            transform="scale(1.1)" zIndex={20}
                        >
                            <span className="material-symbols-outlined text-5xl" style={{ color: '#e9c349', fontVariationSettings: "'FILL' 1" }}>
                                emoji_events
                            </span>
                            <Flex direction="column" align="center" gap={2}>
                                <Box w={16} h={16} borderRadius="full" overflow="hidden" border="2px solid #e9c349" boxShadow="lg" bg="#1c051f">
                                    <Image src="https://flagcdn.com/w80/ar.png" alt="Argentina" w="full" h="full" objectFit="cover" />
                                </Box>
                                <Text fontFamily="'Space Grotesk', sans-serif" fontSize="2xl" fontWeight="bold" color="#e9c349" textTransform="uppercase" letterSpacing="widest">
                                    Argentina
                                </Text>
                                <Text fontFamily="'Manrope', sans-serif" fontSize="sm" color="#cdc3d4" textTransform="uppercase" letterSpacing="widest">
                                    Campeão
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>

                    {/* COLUNA 5: Semi Direita (1 jogo) */}
                    <Flex direction="column" justify="space-around" h="full">
                        <BracketMatch match={null} />
                    </Flex>

                    {/* COLUNA 6: Quartas Direita (2 jogos) */}
                    <Flex direction="column" justify="space-around" h="full">
                        <BracketMatch match={null} />
                        <BracketMatch match={null} />
                    </Flex>

                    {/* COLUNA 7: Oitavas Direita (4 jogos) */}
                    <Flex direction="column" justify="space-around" h="full">
                        <BracketMatch match={{ team1: { name: "França", score: 3, logo: "https://flagcdn.com/w40/fr.png" }, team2: { name: "Polônia", score: 1, logo: "https://flagcdn.com/w40/pl.png" }, status: "Finalizado" }} />
                        <BracketMatch match={null} />
                        <BracketMatch match={null} />
                        <BracketMatch match={null} />
                    </Flex>

                </Flex>
            </Box>

        </Box>
    );
}

export default Bracket;