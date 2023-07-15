import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken';

interface AuthUserRequest{
    username: string;
    password: string
}

class AuthUserService{
    async execute({ username, password }: AuthUserRequest){

        //Valindando campos do JSON
        if(!username){
            throw new Error("Username incorrect")
        }
        if(!password){
            throw new Error("Password incorrect")
        }

        const user = await prismaClient.user.findFirst({
            where:{
                username: username
            }
        })

        if(!user){
            throw new Error("Username/password incorrect")
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Username/password incorrect")
        }

        const token = sign({
            name: user.name,
            username: user.username
        }, process.env.JWT_SECRET,
        {
            subject: user.id,
            expiresIn: '30d'
        }
        )

        return {
            id: user.id,
            name: user.name,
            username: user.username,
            token: token
        }
    }
}

export { AuthUserService };