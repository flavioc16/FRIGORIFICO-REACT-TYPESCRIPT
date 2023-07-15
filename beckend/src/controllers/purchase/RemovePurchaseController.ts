import { Request, Response } from "express";

import { RemovePurchaseService } from "../../services/purchase/RemovePurchaseService";

class RemovePurchaseController{
    async handle(req: Request, res: Response){

        const purchase_id = req.query.purchase_id as string;

        const removePurchaseService = new RemovePurchaseService();

        const purchase = await removePurchaseService.execute({
            purchase_id
        })

        return res.json(purchase);
    }
}

export { RemovePurchaseController };