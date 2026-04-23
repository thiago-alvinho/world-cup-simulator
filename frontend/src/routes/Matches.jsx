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
    const groupStageOk = localStorage.getItem('@worldcup:groupStageOk') === 'true';

    useEffect(() => {
        const fetchAndFilterMatches = async () => {
            setLoading(true);
            try {

                const allMatches = await getGroupStageResults();

                const groupMatches = allMatches.filter(
                    (partida) => partida.stage === `Group ${groupID}`
                );

                setMatches(groupMatches);
            } catch (error) {
                console.error("There's been an error getting group stage results", error);
                navigate('/error');
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
                    text="RETURN TO GROUPS" 
                    onClick={() => navigate('/groups')}
                    alignSelf="flex-start" 
                />

                <Box position="relative">
                    <Box position="absolute" left="-10" top="0" w="32" h="32" bg="rgba(215, 186, 255, 0.2)" borderRadius="full" filter="blur(40px)" zIndex="-1"/>
                    <Title title={`GROUP ${groupID}`} subtitle="Group stage • Matches" align="left" />
                </Box>
            </Flex>

            {/* SEÇÃO 2: LISTA DE PARTIDAS */}
            <Flex direction="column" gap={6}>

                {/* if loading, a spinning is showed */}
                {!groupStageOk ? (
                    <Flex direction="column" align="center" justify="center" py={12} gap={4} opacity={0.6}>
                        <span className="material-symbols-outlined" style={{ fontSize: '48px', color: '#cdc3d4' }}>
                            calendar_clock
                        </span>
                        <Text color="#cdc3d4" fontSize="lg" fontFamily="'Space Grotesk', sans-serif">
                            The matches not started yet.
                        </Text>
                    </Flex>
                )
                
                : loading ? (
                    <Flex justify="center" py={12}>
                        <Spinner color="#e9c349" size="xl" />
                    </Flex>
                ) : matches.length === 0 ? (
                    <Text color="#cdc3d4" textAlign="center">There's no matches to this group.</Text>
                ) : (
                    matches.map((match) => (
                        <MatchCard 
                            key={`${match.equipeA}-${match.equipeB}`}
                            stage="Group stage" 
                            status="Finished"
                            
                            team1={{ 
                                name: match.nomeEquipeA, 
                                score: match.golsEquipeA, 
                                logo:
                                    match.codeEquipeA 
                                    ? `https://flagcdn.com/w80/${match.codeEquipeA}.png` 
                                    : `https://ui-avatars.com/api/?name=${match.nomeEquipeA}&background=1c051f&color=fed6fc&bold=true` 
                            }}
                            team2={{ 
                                name: match.nomeEquipeB, 
                                score: match.golsEquipeB, 
                                logo: 
                                    match.codeEquipeB
                                    ? `https://flagcdn.com/w80/${match.codeEquipeB}.png` 
                                    : `https://ui-avatars.com/api/?name=${match.nomeEquipeB}&background=1c051f&color=fed6fc&bold=true` 
                            }}
                        />
                    ))
                )}
            </Flex>

        </Box>
    );
}

export default Matches;