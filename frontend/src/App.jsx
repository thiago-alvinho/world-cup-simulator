import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import Header from './components/ui/Header/Header.jsx';
import Title from './components/ui/Titles/Title.jsx'
import HeaderTable from './components/ui/Table/HeaderTable.jsx';
import TeamTable from './components/ui/Table/TeamTable.jsx';
import { getTeams } from './services/teams.js';

function App() {

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    
    const fetchTeams = async () => {
      try {
        const dados = await getTeams();
        setTeams(dados);
      } catch (error) {
        console.error(error);
      }

    }

    fetchTeams();
  }, []);  

  
  return (
    // Box principal definindo o fundo de toda a tela e a fonte padrão
    <Box minH="100vh" bg="#220925" color="white" fontFamily="'Manrope', sans-serif">
      <Header />
      <Title/>
      <TeamTable teams={teams} />
    </Box>
  );
}

export default App;