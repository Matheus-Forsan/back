import { getProducts, createProductController, getProduct } from "../controllers/productController.js"
import { Router } from "express"


const router = Router();

router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.post("/products", createProductController);

export default router;