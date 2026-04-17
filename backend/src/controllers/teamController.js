import { getTeams } from "../services/tournament.js";

export async function getAllTeams(req, res) {
    try {
        const teams = await getTeams();
        res.status(200).send(teams);
    } catch (error) {
        console.error(error);
    }
}