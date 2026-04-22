import { useEffect, useState } from 'react';
import Title from '../components/ui/Titles/Title.jsx'
import TeamTable from '../components/ui/Table/TeamTable/TeamTable.jsx';
import { getTeams, generateGroups } from '../services/api.js';
import GoldenButton from '../components/ui/Buttons/GoldenButton.jsx';
import { useNavigate } from 'react-router';

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
  
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGenerateGroups = async () => {
    setLoading(true);
    try {
      await generateGroups();
      navigate('/groups');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  
  return (
    <>
      <Title
        title='SELEÇÕES CLASSIFICADAS'
        subtitle='Confira o ranking oficial e prepare-se para o sorteio.'
        mb={12}
        mt={12}
      />
      <GoldenButton text={loading ? 'Sorteando...' : 'Formar grupos'} onClick={handleGenerateGroups}/>
      <TeamTable teams={teams} />
    </>
  );
}

export default Home;