import prismaClient from "../../prisma";

interface ClinteRequest{
    client_id: string
}

class ListClientByIdService{
    async execute({ client_id }: ClinteRequest){

        const client = await prismaClient.client.findFirst({
           where:{
            id: client_id
           },
           select:{
            id: true,
            name: true,
            reference: true,
            address: true,
            telephone: true,
            limit: true
           }
        })

        return client;
    }
}

export { ListClientByIdService };