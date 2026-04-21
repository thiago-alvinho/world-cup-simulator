import teamsAPI from "../config/index.js";
import { readData, writeData } from "../utils/fileSystem.js";

export async function getTeams(req, res) {
    try {
        const response = await teamsAPI.get('/WorldCup/GetAllTeams');
        const teams = [...response.data];
        const ranking = await readData('ranking');
        
        teams.map((team) => {
            team.ranking = ranking[team.nome] || 1400;
        })

        await writeData('teams', teams);

        //await defineGroups(teams);
        //await playGroupStage();
        //await playDeathMatch();

        res.status(200).send(teams);
    } catch (error) {
        console.error(error);
    }
}