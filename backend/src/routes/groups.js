import { Router } from 'express'
import { getGroups, generateGroups } from '../controllers/groupController.js'

const router = Router();

router.get("/", getGroups);
router.post("/generate", generateGroups);

export default router;