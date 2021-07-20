import { Request, Response } from "express";

import { AuthService } from "../services/AuthService";

class AuthController {

    async login(request: Request, response: Response) {
        const { username, password } = request.body;
        const authService = new AuthService();
        const token = await authService.execute({
            username,
            password
        });
        return response.json(token);
    }

}

export { AuthController };