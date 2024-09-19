import { getCostumer } from "../controllers/costumerController.js";
import { Router } from "express"


const router = Router();

router.get("/costumers", getCostumer);

export default router;