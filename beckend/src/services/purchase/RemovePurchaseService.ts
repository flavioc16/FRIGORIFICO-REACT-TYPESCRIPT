import prismaClient from "../../prisma";

interface PurchaseRequest{
    purchase_id: string;
}

class RemovePurchaseService{
    async execute({ purchase_id }: PurchaseRequest){

        const purchase = await prismaClient.purchase.delete({
            where:{
                id: purchase_id
            }
        })

        return purchase;
    }
}

export { RemovePurchaseService };