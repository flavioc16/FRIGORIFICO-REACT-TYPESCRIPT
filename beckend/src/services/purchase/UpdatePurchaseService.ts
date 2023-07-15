import prismaClient from "../../prisma";

interface PurchaseRequest{
    purchase_id: string;
    description: string;
    type: string;
    total: number;
    status: boolean;
}

class UpdatePurchaseService{
    async execute({purchase_id, description, type, status, total}: PurchaseRequest){

        if(!purchase_id){
            throw new Error("Purchase_id incorrect")
        }

        if(!description){
            throw new Error("Type incorrect")
        }

        if(!type){
            throw new Error("Total incorrect")
        }

        if(!total){
            throw new Error("Total incorrect")
        }

        const purchase = await prismaClient.purchase.update({
            where:{
                id: purchase_id
            },
            data:{
                description: description,
                type: type,
                status: status,
                total: total,
            }
        })

        return purchase;

    }
}

export { UpdatePurchaseService };