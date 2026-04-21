import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:3000'});

export async function getTeams() {
    try {
        const response = await API.get('/teams');
        return response.data;
    } catch(error) {
        console.error(error);
    }
}

export async function getGroups() {
    try {
        const response = await API.get('/groups');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

