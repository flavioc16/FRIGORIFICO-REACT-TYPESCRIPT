import prismaClient from "../../prisma";

class ListClientsService{
    async execute(){
        
        const clients = await prismaClient.client.findMany({
            select:{
                id: true,
                name: true,
                reference: true,
                address: true,
                telephone: true,
                limit: true
            }
        })

        return clients;
    }
}

export { ListClientsService };