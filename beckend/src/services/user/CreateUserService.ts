import prismaClient from "../../prisma";

import { hash } from 'bcryptjs'

interface UserRequest{
    name: string;
    username: string;
    password: string;
}

class CreateUserService{
    async execute({name, username, password}: UserRequest){
        //Valindando campos do JSON
        if(!name){
            throw new Error("Name incorrect")
        }
        if(!username){
            throw new Error("Username incorrect")
        }
        if(!password){
            throw new Error("Password incorrect")
        }

        //Verificando se ja existe um username no banco
        const usernameAlreadyExist = await prismaClient.user.findFirst({
            where:{
                username: username
            }
        })

        if(usernameAlreadyExist){
            throw new Error("Username already exists")
        }

        const passwordHash = await hash(password, 8);

        const user = await prismaClient.user.create({
            data:{
                name: name,
                username: username,
                password: passwordHash,
            },
            select:{
                id: true,
                name: true,
                username: true
            }
        })
        return user;
    }
}

export { CreateUserService };