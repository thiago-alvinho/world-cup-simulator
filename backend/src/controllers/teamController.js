import teamsAPI from "../config/index.js";
import { readData, writeData } from "../utils/fileSystem.js";

export async function getTeams(req, res) {
    try {
        const response = await teamsAPI.get('/WorldCup/GetAllTeams');
        const teams = [...response.data];
        const ranking = await readData('ranking');
        
        teams.forEach((team) => {
            team.ranking = ranking[team.nome]?.pontos || 1400;
            team.code = ranking[team.nome]?.code || "";
        });

        teams.sort((a, b) => b.ranking - a.ranking);
        await writeData('teams', teams);

        res.status(200).send(teams);
    } catch (error) {
        console.error("There's been an error in the request to the API", error);
        res.status(500).json({messasge: "There's been an error in the request to the API"});
    }
}

export async function readTeams(req, res) {
    try {
        const teams = await readData('teams');
        res.status(200).send(teams);
    } catch (error) {
        console.error("There's been an error reading the teams", error);
        res.status(500).json({messasge: "There's been an error reading the teams"});
    }
}

export async function sendChampion(req, res) {
    try {
        const final = await readData('final');
        const match = final[0];
        
        const payload = {
            "equipeA": match.equipeA, 
            "equipeB": match.equipeB, 
            "golsEquipeA": match.golsEquipeA,
            "golsEquipeB": match.golsEquipeB,
            "golsPenaltyTimeA": match.golsPenaltyTimeA || 0,
            "golsPenaltyTimeB": match.golsPenaltyTimeB || 0
        }

        const response = await teamsAPI.post('/WorldCup/FinalResult', payload);
        console.log(response.data);
        res.status(200).json({
            message: "Champion has been sent to the API!",
            apiResponse: response.data
        });

    } catch (error) {
        console.error("There's been an error sending the champion to the API", error);
        res.status(500).json({messasge: "There's been an error sending the champion to the API"});
    }
}