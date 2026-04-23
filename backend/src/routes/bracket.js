import { Router } from 'express'
import { getResults, generateResults } from '../controllers/bracketController.js'
import { sendChampion } from '../controllers/teamController.js';

const router = Router();

router.get("/", getResults);
router.get("/generate", generateResults);
router.post("/send-champion", sendChampion);

export default router;