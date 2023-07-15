import { Request, Response } from "express";

import { ListUserByIdService } from "../../services/user/ListUserByIdService";

class ListUserByIdController{
    async handle(req: Request, res: Response){

        const user_id = req.query.user_id as string;

        const listUserByIdService = new ListUserByIdService();

        const user = await listUserByIdService.execute({
            user_id
        })

        return res.json(user);
    }
}

export { ListUserByIdController };