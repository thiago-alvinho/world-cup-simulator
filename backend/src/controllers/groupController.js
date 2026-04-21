import { readData, writeData } from "../utils/fileSystem.js";
import { defineGroups } from '../services/tournament.js'

export async function getGroups(req, res) {
    try {
        const groups = await readData('groups');
        res.status(200).send(groups);
    } catch (error) {
        console.error(error);
    }
}

export async function generateGroups(req, res) {
    try {
        const teams = await readData('teams');
        const newGroups = await defineGroups(teams);

        await writeData('groups', newGroups);

        res.status(201).send(groups);

    } catch(error) {
        console.error(error);
    }
}