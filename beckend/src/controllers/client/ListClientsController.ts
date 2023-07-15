import { Request, Response } from "express";

import { ListClientsService } from "../../services/client/ListClientsService";

class ListClientsController{
    async handle(req: Request, res: Response){

        const listClientsService = new ListClientsService();

        const clients = await listClientsService.execute();

        return res.json(clients);
    }
}

export { ListClientsController };