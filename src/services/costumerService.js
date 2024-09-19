import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllCostumers = async ()=> {
    return await prisma.costumers.findMany();
};