import express from "express";
import productRoutes from "./routes/productRoutes.js"
import costumerRoutes from "./routes/costumerRoutes.js"

const app = express();
app.use(express.json());

app.use(productRoutes);
app.use(costumerRoutes);

app.listen(3000, () => {
  console.log(`Servidor rodando na porta 3000`);
});

