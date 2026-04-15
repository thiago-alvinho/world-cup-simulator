import express from 'express'
import { getAllTeams } from '../controllers/teamController.js'

const routes = express.Router();

routes
    .get("/teams", getAllTeams)

export default routes;