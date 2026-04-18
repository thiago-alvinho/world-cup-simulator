import { randomNumber } from "../utils/randomNumber.js";
import { writeData, readData } from "../utils/fileSystem.js";

// Helper function to generate a coherent score based on the result
function generateScore(result) {
    if (result === 'A') {
        const goalsA = randomNumber(4) + 1;
        const goalsB = randomNumber(goalsA);
        return { goalsA, goalsB };
    } else if (result === 'B') {
        const goalsB = randomNumber(4) + 1; 
        const goalsA = randomNumber(goalsB); 
        return { goalsA, goalsB };
    } else {
        const goals = randomNumber(3);
        return { goalsA: goals, goalsB: goals };
    }
}

// Simulates a single match based on probability (FIFA Points)
export function simulateMatch(teamA, teamB, stage) {
    const totalPoints = (teamA.ranking || 1400) + (teamB.ranking || 1400);
    
    const drawVal = randomNumber(totalPoints);

    // Draw Factor: Creates a 20% "neutral zone" in the middle of the roulette
    const drawMargin = totalPoints * 0.10; 
    const winLimitA = teamA.ranking - drawMargin;
    const winLimitB = teamA.ranking + drawMargin;

    let result;
    if (drawVal < winLimitA) result = 'A';
    else if (drawVal > winLimitB) result = 'B';
    else result = 'DRAW';

    const { goalsA, goalsB } = generateScore(result);

    let winner = null;
    if (result === 'A') winner = teamA.token;
    if (result === 'B') winner = teamB.token;

    return {
        stage: stage,
        equipeA: teamA.token,
        equipeB: teamB.token,
        nomeEquipeA: teamA.nome,
        nomeEquipeB: teamB.nome,
        golsEquipeA: goalsA,
        golsEquipeB: goalsB,
        golsPenaltyTimeA: 0,
        golsPenaltyTimeB: 0,
        winner: winner
    };
}

export function simulatePenalties(teamA, teamB) {
    const result = {
        golsPenaltyTimeA: 0,
        golsPenaltyTimeB: 0,
        winner: null
    };

    const rankingA = teamA.ranking || 1400;
    const rankingB = teamB.ranking || 1400;
    const totalPoints = rankingA + rankingB;

    let chutesA = 5;
    let chutesB = 5;

    // Cobranças regulamentares
    while (chutesA > 0 || chutesB > 0) {
        
        if (chutesA > 0) {
            if (randomNumber(totalPoints) <= rankingA) {
                result.golsPenaltyTimeA++;
            }
            chutesA--;
        }

        if (result.golsPenaltyTimeA > result.golsPenaltyTimeB + chutesB) break;
        if (result.golsPenaltyTimeB > result.golsPenaltyTimeA + chutesA) break;

        if (chutesB > 0) {
            if (randomNumber(totalPoints) <= rankingB) {
                result.golsPenaltyTimeB++;
            }
            chutesB--;
        }

        if (result.golsPenaltyTimeA > result.golsPenaltyTimeB + chutesB) break;
        if (result.golsPenaltyTimeB > result.golsPenaltyTimeA + chutesA) break;
    }

    // Cobranças alternadas: Gol de ouro
    while (result.golsPenaltyTimeA === result.golsPenaltyTimeB) {
        const marcouA = randomNumber(totalPoints) <= rankingA ? 1 : 0;
        const marcouB = randomNumber(totalPoints) <= rankingB ? 1 : 0;

        result.golsPenaltyTimeA += marcouA;
        result.golsPenaltyTimeB += marcouB;
    }

    result.winner = result.golsPenaltyTimeA > result.golsPenaltyTimeB ? teamA.token : teamB.token;

    return result;
}

// Função utilizada para chamar as funções necessárias para montar a partida, simular a partida e o pênalti caso necessário. 
export async function simulateDeathMatch(bracketBuilder, stage) {
    try {
        const bracket = await bracketBuilder(stage);
            const results = [];
            
            for(const match of bracket) {
                const matchResult = simulateMatch(match.equipeA, match.equipeB, match.stage);
    
                if(matchResult.winner == null) {
                    const penaltiesResult = simulatePenalties(match.equipeA, match.equipeB);
                    matchResult.golsPenaltyTimeA = penaltiesResult.golsPenaltyTimeA;
                    matchResult.golsPenaltyTimeB = penaltiesResult.golsPenaltyTimeB;
                    matchResult.winner = penaltiesResult.winner;
                }
                
                results.push(matchResult);
            }
            
            await writeData(stage, results);

    } catch(error) {
        console.error(error);
    }
}
