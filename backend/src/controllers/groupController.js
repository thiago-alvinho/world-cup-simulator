import { readData, writeData } from "../utils/fileSystem.js";
import { defineGroups, playGroupStage } from '../services/tournament.js'

export async function getGroups(req, res) {
    try {
        const groups = await readData('groups');
        res.status(200).send(groups);
    } catch (error) {
        console.error("There's been an error reading the groups", error);
        res.status(500).json({messasge: "There's been a error reading the groups"});
    }
}

export async function generateGroups(req, res) {
    try {
        const teams = await readData('teams');
        const newGroups = await defineGroups(teams);

        await writeData('groups', newGroups);

        res.status(201).send(newGroups);

    } catch(error) {
        console.error("There's been an error generating the groups", error);
        res.status(500).json({messasge: "There's been a error generating the groups"});
    }
}

export async function simulateGroupStage(req, res) {
    try {
        
        const finalGroups = await playGroupStage();
        res.status(200).send(finalGroups);

    } catch(error) {
        console.error("There's been an error simulating the group stage", error);
        res.status(500).json({messasge: "There's been an error simulating the group stage"});
    }
}

export async function resultGroupStage(req, res) {
    try {
        const results = await readData('groupStageResults')
        res.status(200).send(results);
    } catch(error) {
        console.error("There's been an error reading the group stage result", error);
        res.status(500).json({messasge: "There's been an error reading the group stage result"});
    }
}