import { Box, Flex, Text, Spinner } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import Title from "../components/ui/Titles/Title";
import GlassButton from "../components/ui/Buttons/GlassButton";
import MatchCard from '../components/ui/Cards/MatchCard';
import { getGroupStageResults } from "../services/api";

function Matches() {
    const { groupID } = useParams();
    const navigate = useNavigate();
    
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAndFilterMatches = async () => {
            setLoading(true);
            try {

                const todasAsPartidas = await getGroupStageResults();

                const partidasDoGrupo = todasAsPartidas.filter(
                    (partida) => partida.stage === `Group ${groupID}`
                );

                setMatches(partidasDoGrupo);
            } catch (error) {
                console.log("Erro ao carregar as partidas:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAndFilterMatches();
    }, [groupID]);

    return (
        <Box w="full" maxW="5xl" mx="auto" px={4} py={{ base: 8, md: 12 }} display="flex" flexDirection="column" gap={10}>
            
            <Flex direction="column" gap={6}>
                <GlassButton 
                    text="VOLTAR PARA GRUPOS" 
                    onClick={() => navigate('/groups')}
                    alignSelf="flex-start" 
                />

                <Box position="relative">
                    <Box position="absolute" left="-10" top="0" w="32" h="32" bg="rgba(215, 186, 255, 0.2)" borderRadius="full" filter="blur(40px)" zIndex="-1"/>
                    <Title title={`GRUPO ${groupID}`} subtitle="Fase de Grupos • Partidas" align="left" />
                </Box>
            </Flex>

            {/* SEÇÃO 2: LISTA DE PARTIDAS */}
            <Flex direction="column" gap={6}>

                {/* Se estiver carregando, mostra o spinner. Se não, desenha os cards */}
                {loading ? (
                    <Flex justify="center" py={12}>
                        <Spinner color="#e9c349" size="xl" />
                    </Flex>
                ) : matches.length === 0 ? (
                    <Text color="#cdc3d4" textAlign="center">Nenhuma partida encontrada para este grupo.</Text>
                ) : (
                    matches.map((match) => (
                        <MatchCard 
                            key={`${match.equipeA}-${match.equipeB}`}
                            date="Fase de Grupos" 
                            status="Finalizado"
                            
                            team1={{ 
                                name: match.nomeEquipeA, 
                                score: match.golsEquipeA, 
                                logo: `https://ui-avatars.com/api/?name=${match.nomeEquipeA}&background=1c051f&color=fed6fc&bold=true` 
                            }}
                            team2={{ 
                                name: match.nomeEquipeB, 
                                score: match.golsEquipeB, 
                                logo: `https://ui-avatars.com/api/?name=${match.nomeEquipeB}&background=1c051f&color=fed6fc&bold=true` 
                            }}
                        />
                    ))
                )}
            </Flex>

        </Box>
    );
}

export default Matches;