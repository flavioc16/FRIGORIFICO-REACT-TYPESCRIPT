import prismaClient from "../../prisma";

interface PurchaseRequest{
    description: string;
    type: string;
    total: number;
    status: boolean;
    client_id: string;
}

class CreatePurchaseService{
    async execute({ description, type, status, total, client_id }: PurchaseRequest){

        if(!description){
            throw new Error("Description incorrect")
        }

        if(!type){
            throw new Error("Type incorrect")
        }

        if(!total){
            throw new Error("Total incorrect")
        }

        if(!client_id){
            throw new Error("Client-id incorrect")
        }

        const purchase = await prismaClient.purchase.create({
            data:{
                description: description,
                type: type,
                status: status,
                total: total,
                client_id: client_id
            }
        })
        return purchase;
    }
}

export { CreatePurchaseService };