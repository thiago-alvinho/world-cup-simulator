import { useEffect, useState } from 'react';
import Title from '../components/ui/Titles/Title.jsx'
import TeamTable from '../components/ui/Table/TeamTable/TeamTable.jsx';
import { getTeams } from '../services/api.js';
import GoldenButton from '../components/ui/Buttons/GoldenButton.jsx';

function Home() {

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
    <>
      <Title
        title='SELEÇÕES CLASSIFICADAS'
        subtitle='Confira o ranking oficial e prepare-se para o sorteio.'
        mb={12}
        mt={12}
      />
      <GoldenButton text='Formar grupos' to='/groups'/>
      <TeamTable teams={teams} />
    </>
  );
}

export default Home;