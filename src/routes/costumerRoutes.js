import { getCostumers, getCostumerId, createCostumerController, updateCostumerController, DeleteCostumerController } from "../controllers/costumerController.js";
import { Router } from "express"


const router = Router();

router.get("/costumers", getCostumers);
router.get("/costumers/:id", getCostumerId);
router.post("/costumers", createCostumerController);
router.patch("/costumers/:id", updateCostumerController);
router.delete("/costumers/:id", DeleteCostumerController);

export default router;