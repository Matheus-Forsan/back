import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllCostumers = async ()=> {
    return await prisma.costumers.findMany();
};

export const createCostumer = async (costumerData)=>{
    return await prisma.costumers.create({
        data:costumerData,
    });
}

export const getCostumerById =async(id) =>{
    return await prisma.costumers.findUnique({
        where:{ id:parseInt(id) }
    })
}

export const updateCostumer = async(id, costumerData) =>{
    return await prisma.costumers.update({
            where:{id:parseInt(id)},
            data: costumerData,
        });
};

export const deleteCostumer = async(id) =>{
    return await prisma.costumers.delete({
        where:{id:parseInt(id)},
    })
};