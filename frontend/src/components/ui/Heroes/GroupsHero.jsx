import { Box, Flex } from "@chakra-ui/react";
import GoldenButton from '../Buttons/GoldenButton.jsx';
import Title from "../Titles/Title.jsx";
import { useNavigate } from "react-router";
import { generateBracketResults, sendChampion } from "@/services/api.js";

function GroupsHero({onClick, text, tournamentAlreadyStarted}) {
  const navigate = useNavigate();

  const handleBracket = async () => {
    try {
      localStorage.setItem('@worldcup:bracketOk', 'true');
      await generateBracketResults();
      await sendChampion();
      navigate('/bracket');
    } catch (error) {
      console.error("There's been an error generating brackets", error);
      navigate('/error');
    }
  }

  return (
    <Flex 
      direction={{ base: "column", md: "row" }} 
      justify="space-between" 
      align="center" 
      gap={6} 
      bg="#2b122d"
      p={6} 
      borderRadius="xl" 
      position="relative" 
      overflow="hidden"
    >
      {/* AMBIENT GLOW (BACKGROUND EFFECT) */}
      <Box 
        position="absolute" 
        inset={0} 
        bgGradient="linear(to-br, rgba(215, 186, 255, 0.1), transparent)" 
        pointerEvents="none"
      />

      {/* LEFTSIDE: TEXT */}
      <Box zIndex={10}>
        <Title 
          title="Group stage"
          subtitle="32 Teams fighting for the eternal glory."
          align="left"
          mb={0} mt={0}
        />
      </Box>

      {/* RIGHTSIDE: ACTION BUTTON */}
      <Flex direction={{ base: "column", sm: "row" }} gap={4} w={{ base: "full", md: "auto" }} zIndex={10}>

        {tournamentAlreadyStarted ? (
            
            // If already started, a button just to navigate to /bracket
            <GoldenButton 
                text="Define bracket"
                onClick={handleBracket}
            />
            
        ) : (
            
            // If not started yet, this button will start.
            <GoldenButton 
                text={text}
                onClick={onClick} 
            />
            
        )}
        
      </Flex>
    </Flex>
  );
}

export default GroupsHero;