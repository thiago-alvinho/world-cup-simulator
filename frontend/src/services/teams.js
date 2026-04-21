import axios from 'axios'

const teamsAPI = axios.create({ baseURL: 'http://localhost:3000/teams'});

export async function getTeams() {
    try {
        const response = await teamsAPI.get('/');
        console.log(response.data);
        return response.data;
    } catch(error) {
        console.error(error);
    }
}