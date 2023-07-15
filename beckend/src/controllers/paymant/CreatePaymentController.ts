import { Request, Response } from "express";

import { CreatePaymentService } from "../../services/paymant/CreatePaymentService";

class CreatePaymentController {
    async handle(req: Request, res: Response){

        const { client_id, value} = req.body;

        const createPaymentService = new CreatePaymentService();

        const payment = await createPaymentService.execute({client_id, value});

        return res.json(payment);
    }
}

export { CreatePaymentController };