import { getAllCostumers } from "../services/costumerService.js";


export const getCostumer = async (req, res)=>{
    try { 
        const costumers = await getAllCostumers();
        res.json(costumers)
    }
    catch (error){
        res.status(500).json({
            error: "Erro ao buscar Consumidores"
        });
    }
};