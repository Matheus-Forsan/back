import { getProducts } from "../controllers/productController.js"
import { Router } from "express"


const router = Router();

router.get("/products", getProducts);

export default router;