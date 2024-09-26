import { createCostumer, deleteCostumer, getAllCostumers, getCostumerById, updateCostumer } from "../services/costumerService.js";


export const getCostumers = async (req, res)=>{
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

export const createCostumerController = async (req, res) =>{
    try {
        const newCostumer = await createCostumer(req.body);
        res.status(201).json(newCostumer)
    }
    catch (error) {
        res.status(500).json({error: "Erro ao criar Consumidor"
            
        });
    }
};

export const getCostumerId = async (req, res) =>{
    try {
        const costumer = await getCostumerById(req.params.id)
        if(costumer){
            res.json(costumer);
        } else {
            res.status(500).json({error: "Consumidor não encontrado"}

            )};
    }
    catch(error){
        res.status(500).json({error: "erro ao buscar Consumidor"})
    }
};

export const updateCostumerController = async (req, res) =>{
    try {
        const costumer = await updateCostumer(req.params.id, req.body);
        res.json(costumer)
    }
    catch (error){
        res.status(500).json({error: "Erro ao atualizar Consumidor"});
    }
};

export const DeleteCostumerController = async (req, res)=>{
    try {
        await deleteCostumer(req.params.id);
        res.status(204).send();
    }
    catch(error) {
        res.status(500).json({error: "erro ao deletar Consumidor"})
    }
};