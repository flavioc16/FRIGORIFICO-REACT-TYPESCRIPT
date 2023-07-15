import prismaClient from "../../prisma";

interface IdClientRequest{
    client_id: string;
}

class ListByClientPurchaseService{
    async execute({ client_id }: IdClientRequest){
        
        const purchase = await prismaClient.purchase.findMany({
            where:{
                client_id: client_id
            },
        });

        return purchase;
    }
}

export { ListByClientPurchaseService };