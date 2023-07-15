import prismaClient from "../../prisma";

interface ClientRequest{
    client_id: string;
}

class RemoveClientService{
    async execute({ client_id }: ClientRequest){
        try {
            const client = await prismaClient.client.delete({
                where:{
                    id: client_id
                }
            })

            return client;

        } catch (error) {
            throw new Error(error)
        }
    }
}

export { RemoveClientService };