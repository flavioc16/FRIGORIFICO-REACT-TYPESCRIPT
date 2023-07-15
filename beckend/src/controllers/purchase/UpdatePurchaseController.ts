import { Request, Response } from "express";

import { UpdatePurchaseService } from "../../services/purchase/UpdatePurchaseService";

class UpdatePurchaseController{
    async handle(req: Request, res: Response){

        const { purchase_id, description, type, status, total } = req.body;

        const updatePurchaseService = new UpdatePurchaseService();

        const purchase = await updatePurchaseService.execute({
            purchase_id, 
            description, 
            type,
            status, 
            total
        })

        return res.json(purchase);
    }
}

export { UpdatePurchaseController };