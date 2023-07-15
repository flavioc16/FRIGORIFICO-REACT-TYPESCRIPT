import prismaClient from "../../prisma";

class ListAllPurchaseService{
    async execute(){

        const purchase = await prismaClient.purchase.findMany();

        return purchase;
    }
}

export { ListAllPurchaseService };