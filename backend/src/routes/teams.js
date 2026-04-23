import { Router } from 'express'
import { getTeams, readTeams } from '../controllers/teamController.js'

const router = Router();

router.get("/", readTeams);
router.get("/fetch", getTeams);

export default router;