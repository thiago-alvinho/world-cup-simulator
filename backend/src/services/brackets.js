import { readData, writeData } from '../utils/fileSystem.js';

export async function buildRoundOf16(stage) {
    try {
        const groups = await readData('groups');
        if (!groups) throw new Error("Grupos não encontrados.");

        const classified = {};

        groups.forEach(group => {
            // Para valores negativos b fica na frente do a
            group.teams.sort((a, b) => {
                if (b.points !== a.points) return b.points - a.points; // Mais pontos
                if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference; // Maior saldo
                return Math.random() - 0.5; // Sorteio em caso de empate total
            });

            classified[`1${group.name.at(-1)}`] = group.teams[0];
            classified[`2${group.name.at(-1)}`] = group.teams[1];
        });

        const roundOf16Matches = [
            { stage: 'Oitavas - Jogo 1', equipeA: classified['1A'], equipeB: classified['2B'] },
            { stage: 'Oitavas - Jogo 2', equipeA: classified['1C'], equipeB: classified['2D'] },
            { stage: 'Oitavas - Jogo 3', equipeA: classified['1E'], equipeB: classified['2F'] },
            { stage: 'Oitavas - Jogo 4', equipeA: classified['1G'], equipeB: classified['2H'] },
            { stage: 'Oitavas - Jogo 5', equipeA: classified['1B'], equipeB: classified['2A'] },
            { stage: 'Oitavas - Jogo 6', equipeA: classified['1D'], equipeB: classified['2C'] },
            { stage: 'Oitavas - Jogo 7', equipeA: classified['1F'], equipeB: classified['2E'] },
            { stage: 'Oitavas - Jogo 8', equipeA: classified['1H'], equipeB: classified['2G'] }
        ];

        return roundOf16Matches;

    } catch (error) {
        console.error("Erro ao montar oitavas de final:", error);
    }
}

export async function bracketBuilder(stage) {
    try {
        
        let matchups = [];
        let lastStage = '';

        switch(stage) {
            case 'round8Results':
                matchups = [
                    [0, 1], [2, 3],
                    [4, 5], [6, 7]
                ]
                lastStage = 'round16Results'
                break;
            case 'round4Results':
                matchups = [
                    [0, 1], [2, 3]
                ]
                lastStage = 'round8Results'
                break;
            case 'final':
                matchups = [
                    [0, 1]
                ]
                lastStage = 'round4Results';
                break;
        }
        
        const resultsLastStage = await readData(lastStage);
        const groups = await readData('groups');
        const matches = [];

        const allTeams = groups.flatMap(group => group.teams);


        let teamA = 0;
        let teamB = 0;
        let match = {};
        let jogo = 1;

        for(const [idxA, idxB] of matchups) {
            const tokenA = resultsLastStage[idxA].winner;
            const tokenB = resultsLastStage[idxB].winner;

            // Pegando as informações do time dos grupos pois tem o ranking que será utilizado para simular a partida
            teamA = allTeams.find(team => team.token === tokenA);
            teamB = allTeams.find(team => team.token === tokenB);

            match = { stage: `Jogo ${jogo++}`, equipeA: teamA, equipeB: teamB };
            matches.push(match);
        }

        console.log(matches);
        return matches;

    } catch (error) {
        console.error(error);
    }
}