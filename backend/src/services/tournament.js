import teamsAPI from "../config/index.js";
import { writeData, readData} from '../utils/fileSystem.js'
import { randomNumber } from "../utils/randomNumber.js";
import { groupName } from "../utils/groupName.js";
import { simulateDeathMatch, simulateMatch, simulatePenalties } from "./simulator.js";
import { buildRoundOf16, bracketBuilder } from "./brackets.js";

// this function select aleatory teams to form the groups
export async function defineGroups(teams) {
    try {
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
                teams.splice(randomTeam, 1);
                group.teams.push(team);
                selectedTeams++;
                teamsInGroup++;
            }

            groupNumber++;
            groups.push(group);
            teamsInGroup = 0;

        }

        return groups;
    } catch (error) {
        console.error("There's been an error trying to define the groups:", error);
        throw error;
    }
    

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

            group.teams.sort((a, b) => {
                if (b.points !== a.points) return b.points - a.points; // More points
                if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference; // More goals
                return Math.random() - 0.5; // Total draw -> random selection
            });
        }

        await writeData('groupStageResults', groupStageResults);
    
        await writeData('groups', groups);

        return groups;

    } catch (error) {
        console.error("There's been an error playing the group stage:", error);
        throw error;
    }
}

export async function playDeathMatch() {
    let bracketResults = {};
    
    try {
        
        bracketResults.roundOf16 = await simulateDeathMatch(buildRoundOf16, 'round16Results');
        bracketResults.quarterFinals = await simulateDeathMatch(bracketBuilder, 'round8Results');
        bracketResults.semiFinals = await simulateDeathMatch(bracketBuilder, 'round4Results');
        bracketResults.finalMatch = await simulateDeathMatch(bracketBuilder, 'final');

        await writeData('bracketResults', bracketResults);
        return bracketResults;
    } catch (error) {
        console.error("There's been an error playing the death match:", error);
        throw error;
    }
}


