import { Router } from 'express'
import { getGroups, generateGroups, simulateGroupStage, resultGroupStage } from '../controllers/groupController.js'

const router = Router();

router.get("/", getGroups);
router.get("/results", resultGroupStage);
router.post("/generate", generateGroups);
router.post("/simulate", simulateGroupStage);

export default router;