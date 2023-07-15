import prismaClient from "../../prisma";

class ListAllUsersService{
    async execute(){
        const users = await prismaClient.user.findMany({
            select:{
                id: true,
                name: true,
                username: true,
                password: false 
            }
        });

        return users;
    }
}

export { ListAllUsersService };