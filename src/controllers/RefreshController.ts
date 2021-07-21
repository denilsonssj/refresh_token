import { Request, Response } from "express";

import { RefreshTokenService } from "../services/RefreshTokenService";

class RefreshTokenController {

    async refreshToken(request: Request, response: Response) {
        const { refresh_token } = request.body;
        const refreshTokenService = new RefreshTokenService();
        const token = await refreshTokenService.refreshToken(refresh_token);
        return response.json(token);
    }

}

export { RefreshTokenController };