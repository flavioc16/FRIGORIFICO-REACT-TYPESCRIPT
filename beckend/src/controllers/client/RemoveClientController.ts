import { Request, Response } from "express";

import { RemoveClientService } from "../../services/client/RemoveClientService";

class RemoveClientController{
    async handle(req: Request, res: Response){

        const client_id = req.query.client_id as string;

        const removeClientService = new RemoveClientService();

        const client = await removeClientService.execute({
            client_id
        })

        return res.json(client);
    }
}

export { RemoveClientController };