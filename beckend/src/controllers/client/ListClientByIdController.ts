import { Request, Response } from "express";

import { ListClientByIdService } from "../../services/client/ListClientByIdService";

class ListClientByIdController{
    async handle(req: Request, res: Response){

        const client_id = req.query.client_id as string;

        const listClientByIdService = new ListClientByIdService();

        const client = await listClientByIdService.execute({
            client_id
        });

        return res.json(client)
    }
}

export { ListClientByIdController };