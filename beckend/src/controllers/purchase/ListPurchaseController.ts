import { Request, Response } from "express";

import { ListPurchaseService } from "../../services/purchase/ListPurchaseService";

class ListPurchaseController{
    async handle(req: Request, res: Response){

        const { id } = req.params;

        const listPurchaseService = new ListPurchaseService();

        const purchase = await listPurchaseService.execute({
            id: id
        });

        return res.json(purchase);
    }
}

export { ListPurchaseController };