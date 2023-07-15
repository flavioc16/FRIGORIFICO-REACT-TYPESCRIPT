import prismaClient from "../../prisma";

interface ClientRequest{
    name: string;
    reference: string;
    address: string;
    telephone: string;
    limit: string;
    user_id: string;
}

class CreateClientService{
    async execute({ name, reference, address, telephone, limit, user_id }: ClientRequest){

        const nameAlreadyExist = await prismaClient.client.findFirst({
            where:{
                user_id: user_id
            }
        })

        if(nameAlreadyExist){
            throw new Error("User already exists")
        }
        
        const client = await prismaClient.client.create({
            data:{
                name: name,
                reference: reference,
                address: address,
                telephone: telephone,
                limit: limit,
                user_id: user_id
            },
            select:{
                id: true,
                name: true,
                reference: true,
                address: true,
                telephone: true,
                limit: true,
                user_id: true
            }
        })

        return client;

    }
}

export { CreateClientService };