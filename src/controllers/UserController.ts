import { Request, Response } from "express";

import { UserService } from "../services/UserService";

class UserController {

    async save(request: Request, response: Response) {
        const { name, username, password } = request.body;
        const userService = new UserService();
        const user = await userService.save({
            name,
            username,
            password
        });
        return response.json({ ...user, password: undefined });
    }

}

export { UserController };