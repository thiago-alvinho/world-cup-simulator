import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:3000'});

export async function getTeams() {
    try {
        const response = await API.get('/teams');
        return response.data;
    } catch(error) {
        console.error("[API] There's been a error getting the teams:", error);
        throw error;
    }
}

export async function fetchTeamsExternalAPI() {
    try {
        const response = await API.get('/teams/fetch');
        return response.data;
    } catch(error) {
        console.error("[API] There's been a error fetching the teams:", error);
        throw error;
    }
}

export async function getGroups() {
    try {
        const response = await API.get('/groups');
        console.log('\nDados da response dentro de getGroups:',response.data);
        return response.data;
    } catch (error) {
        console.error("[API] There's been a error getting the groups:", error);
        throw error;
    }
}

export async function generateGroups() {
    try {
        const response = await API.post('/groups/generate');
        return response.data;
    } catch (error) {
        console.error("[API] There's been a error generating the groups:", error);
        throw error;
    }
}

export async function simulateGroupStage() {
    try {
        const response = await API.post('/groups/simulate'); 
        return response.data;
    } catch (error) {
        console.error("[API] There's been a error simulating group stage:", error);
        throw error;
    }
}

export async function getGroupStageResults() {
    try {
        const response = await API.get('/groups/results'); 
        return response.data;
    } catch (error) {
        console.error("[API] There's been a error getting group stage results:", error);
        throw error;
    }
}

export async function getBracketResults() {
    try {
        const response = await API.get('/brackets'); 
        return response.data;
    } catch (error) {
        console.error("[API] There's been a error getting bracket results:", error);
        throw error;
    }
}

export async function generateBracketResults() {
    try {
        const response = await API.get('/brackets/generate'); 
        return response.data;
    } catch (error) {
        console.error("[API] There's been a error generating bracket results:", error);
        throw error;
    }
}

export async function sendChampion() {
    try {
        const response = await API.post('/brackets/send-champion'); 
        return response.data;
    } catch (error) {
        console.error("[API] There's been a error sending the champion:", error);
        throw error;
    }
}

