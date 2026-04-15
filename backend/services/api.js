import teamsAPI from "../config/index.js";

export async function getTeams() {
    try {
        const response = await teamsAPI.get('/WorldCup/GetAllTeams');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
