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
        console.log('\nDados da response dentro de getGroups:',response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function generateGroups() {
    try {
        const response = await API.post('/groups/generate');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function simulateGroupStage() {
    try {
        const response = await API.post('/groups/simulate'); 
        return response.data;
    } catch (error) {
        console.error("Erro ao simular partidas:", error);
        throw error;
    }
}

export async function getGroupStageResults() {
    try {
        const response = await API.get('/groups/results'); 
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar partidas:", error);
        throw error;
    }
}

