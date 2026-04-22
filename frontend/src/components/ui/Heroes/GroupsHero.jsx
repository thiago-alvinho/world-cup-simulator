import { Box, Flex } from "@chakra-ui/react";
import GoldenButton from '../Buttons/GoldenButton.jsx';
import Title from "../Titles/Title.jsx";
import { useNavigate } from "react-router";

function GroupsHero({onClick, text, campeonatoIniciado}) {
  const navigate = useNavigate();

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
      {/* Ambient Glow (O efeito de luz roxa de fundo) */}
      <Box 
        position="absolute" 
        inset={0} 
        bgGradient="linear(to-br, rgba(215, 186, 255, 0.1), transparent)" 
        pointerEvents="none"
      />

      {/* Lado Esquerdo: Textos */}
      <Box zIndex={10}>
        <Title 
          title="Fase de Grupos"
          subtitle="As 32 seleções em busca da glória máxima."
          align="left"
          mb={0} mt={0}
        />
      </Box>

      {/* Lado Direito: Botões de Ação */}
      <Flex direction={{ base: "column", sm: "row" }} gap={4} w={{ base: "full", md: "auto" }} zIndex={10}>
        
        {/* Como esse botão vai disparar a API e não navegar, usamos onClick */}

        {campeonatoIniciado ? (
            
            // Se já começou, renderiza este botão que apenas navega
            <GoldenButton 
                text="Formar Chaveamento"
                onClick={() => navigate('/bracket')}
            />
            
        ) : (
            
            // Se ainda está zerado, renderiza o botão que roda a função
            <GoldenButton 
                text={text}
                onClick={onClick} 
            />
            
        )}

        {/* O botão secundário (Escondido por enquanto, como no seu HTML original) */}
        {/* Usaremos um condicional no futuro para mostrar ele só quando a simulação acabar */}
        
      </Flex>
    </Flex>
  );
}

export default GroupsHero;