import { useEffect, useState } from 'react';
import Title from '../components/ui/Titles/Title.jsx'
import TeamTable from '../components/ui/Table/TeamTable/TeamTable.jsx';
import { getTeams, generateGroups, fetchTeamsExternalAPI } from '../services/api.js';
import GoldenButton from '../components/ui/Buttons/GoldenButton.jsx';
import { useNavigate } from 'react-router';

let teamsAlreadyFetched = false;

function Home() {

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    
    const fetchTeams = async () => {
      try {
        if(!teamsAlreadyFetched) {
          const data = await fetchTeamsExternalAPI();
          setTeams(data);
          teamsAlreadyFetched = true;
        } else {
          const data = await getTeams();
          setTeams(data);
        }
  
      } catch (error) {
        console.error("There's been an error fetching teams in the external API", error);
        navigate('/error');
      }

    }

    fetchTeams();
  }, []);
  
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGenerateGroups = async () => {
    setLoading(true);
    try {
      localStorage.removeItem('@worldcup:groupStageOk', 'false');
      localStorage.removeItem('@worldcup:bracketOk', 'false');
      localStorage.removeItem('@worldcup:championRevealed');

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
        title='QUALIFIED TEAMS'
        subtitle='Look at the official ranking and be prepared to the tournament'
        mb={12}
        mt={12}
      />
      <GoldenButton text={loading ? 'Loading...' : 'Define groups'} onClick={handleGenerateGroups}/>
      <TeamTable teams={teams} />
    </>
  );
}

export default Home;