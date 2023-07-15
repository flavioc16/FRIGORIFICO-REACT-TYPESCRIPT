import { Request, Response } from "express";

import { CreateClientService } from "../../services/client/CreateClientService";

class CreateClientController{
    async handle(req: Request, res: Response){

        const { name, reference, address, telephone, limit, user_id } = req.body;

        const createClientService = new CreateClientService();

        const client = await createClientService.execute({ 
            name, 
            reference, 
            address, 
            telephone, 
            limit,
            user_id
        });

        return res.json(client);
    }
}

export { CreateClientController };