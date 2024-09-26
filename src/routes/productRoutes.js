import { getProducts, createProductController, getProduct, updateProductController, DeleteProductController } from "../controllers/productController.js"
import { Router } from "express"



const router = Router();

router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.post("/products", createProductController);
router.patch("/products/:id", updateProductController);
router.delete("/products/:id", DeleteProductController);

export default router;