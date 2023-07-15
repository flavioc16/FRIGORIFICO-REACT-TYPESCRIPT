import { Request, Response } from "express";

import { CreatePurchaseService } from "../../services/purchase/CreatePurchaseService";

class CreatePurchaseController{
    async handle(req: Request, res: Response){

        const { description, type, status, total, client_id } = req.body;
        
        const createPurchaseService = new CreatePurchaseService();

        const purchase = await createPurchaseService.execute({
            description, 
            type,
            status, 
            total, 
            client_id 
        });

        return res.json(purchase);
    }
}

export { CreatePurchaseController };