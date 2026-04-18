import teamsAPI from "../config/index.js";
import { writeData, readData} from '../utils/fileSystem.js'
import { randomNumber } from "../utils/randomNumber.js";
import { groupName } from "../utils/groupName.js";
import { simulateDeathMatch, simulateMatch, simulatePenalties } from "./simulator.js";
import { buildRoundOf16, bracketBuilder } from "./brackets.js";

export async function getTeams() {
    try {
        const response = await teamsAPI.get('/WorldCup/GetAllTeams');
        const teams = [...response.data];
        await writeData('teams', teams);

        await defineGroups(teams);
        await playGroupStage();
        await playDeathMatch();

        return response.data;
    } catch (error) {
        console.error(error);
    }
}

// this function select aleatory teams to form the groups
async function defineGroups(teams) {

    let selectedTeams = 0;
    let group = 0;
    let teamsInGroup = 0;
    let randomTeam = 0;
    let team = 0
    let groupNumber = 0;
    let groups = [];
    
    const ranking = await readData('ranking');

    while(selectedTeams < 32) {
            
        group = { name: groupName(groupNumber), teams: [] };

        while(teamsInGroup < 4) {
            randomTeam = randomNumber(32 - selectedTeams);
            team = teams[randomTeam];
            team.points = 0; // Inicialization of variables
            team.goalDifference = 0; // Inicialization of variables
            // If the team is not in the ranking, It'll get a default value
            team.ranking = ranking[team.nome] || 1400;
            teams.splice(randomTeam, 1);
            group.teams.push(team);
            selectedTeams++;
            teamsInGroup++;
        }

        groupNumber++;
        groups.push(group);
        teamsInGroup = 0;

    }

    try {
        await writeData('groups', groups);
    } catch (error) {

    }

    return 1;

}


export async function playGroupStage() {
    try {
        const groups = await readData('groups');
        if (!groups) throw new Error("Groups not found. Run the getTeams function first.");

        const groupStageResults = [];

        for (const group of groups) {
            const stage = `${group.name}`;
            
            const matchups = [
                [0, 1], [2, 3], 
                [0, 2], [1, 3], 
                [0, 3], [1, 2] 
            ];

            for (const [idxA, idxB] of matchups) {
                const teamA = group.teams[idxA];
                const teamB = group.teams[idxB];

                const match = simulateMatch(teamA, teamB, stage);
                groupStageResults.push(match);

                teamA.goalDifference += (match.golsEquipeA - match.golsEquipeB);
                teamB.goalDifference += (match.golsEquipeB - match.golsEquipeA);
                
                if (match.winner === teamA.token) {
                    teamA.points += 3;
                } else if (match.winner === teamB.token) {
                    teamB.points += 3;
                } else {
                    teamA.points += 1;
                    teamB.points += 1;
                }

            }
        }

        await writeData('groupStageResults', groupStageResults);
    
        await writeData('groups', groups);

        return groupStageResults;

    } catch (error) {
        console.error("Error simulating group stage:", error);
    }
}

async function playDeathMatch() {
    try {
        await simulateDeathMatch(buildRoundOf16, 'round16Results');
        await simulateDeathMatch(bracketBuilder, 'round8Results');
        await simulateDeathMatch(bracketBuilder, 'round4Results');
        await simulateDeathMatch(bracketBuilder, 'final');
    } catch (error) {
        console.error(error);
    }
}


