import prismaClient from "../../prisma";

interface ListPurchaseRequest{
    id: string;
}

class ListPurchaseService{
    async execute({ id }: ListPurchaseRequest){

        const purchase = await prismaClient.purchase.findFirst({
            where:{
                id: id
            }
        });

        if(!purchase){
            throw new Error("Id invalid")
        }

        return purchase;
    }
}

export { ListPurchaseService };