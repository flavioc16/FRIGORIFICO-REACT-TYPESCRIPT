import prismaClient from "../../prisma";

interface createPaymentRequest{
    client_id: string;
    value: number;
}

class CreatePaymentService{
    async execute({value, client_id}: createPaymentRequest){

        if(!value){
            throw new Error("Value incorrect")
        }

        if(!client_id){
            throw new Error("Client_id incorrect")
        }

        const payment = await prismaClient.payment.create({
            data:{
                value: value,
                client_id: client_id
            }
        })
        return payment
    }
}

export { CreatePaymentService }