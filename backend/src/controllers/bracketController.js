import { playDeathMatch } from "../services/tournament.js";
import { readData } from "../utils/fileSystem.js";

export async function generateResults(req, res) {
    try {
        const results = await playDeathMatch();
        res.status(200).send(results);
    } catch (error) {
        console.error("There's been an error gerating results", error);
        res.status(500).json({messasge: "There's been an error gerating results"});
    }
}

export async function getResults(req, res) {
    try {
        const results = await readData('bracketResults');
        res.status(200).send(results);
    } catch (error) {
        console.error("There's been an error reading bracket results", error);
        res.status(500).json({messasge: "There's been an error reading bracket results"});
    }
}