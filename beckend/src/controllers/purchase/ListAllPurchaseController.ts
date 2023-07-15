import { Request, Response } from "express";

import { ListAllPurchaseService } from "../../services/purchase/ListAllPurchaseService";

class ListAllPurchaseController{
    async handle(req: Request, res: Response){
        const listAllPurchaseService = new ListAllPurchaseService();

        const purchase = await listAllPurchaseService.execute();

        return res.json(purchase);
    }
}

export { ListAllPurchaseController };