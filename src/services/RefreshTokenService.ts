import { getCustomRepository } from "typeorm";
import dayjs from "dayjs";

import { RefreshTokenRepository } from "../repositories/RefreshTokenRepository";
import { GenerateTokenProvider } from "../provider/GenerateTokenProvider";
import { GenerateRefreshToken } from "../provider/GenerateRefreshToken";

class RefreshTokenService {

    async refreshToken(refreshToken: string) {
        const refreshTokenRepository = getCustomRepository(RefreshTokenRepository);
        const refreshTokenAlreadyExists = await refreshTokenRepository.findOne({ 
            where: { 
                id: refreshToken 
            } 
        });
        if (!refreshTokenAlreadyExists) {
            throw new Error("Refresh token Invalid");
        }
        const isRefreshTokenExpired = dayjs()
            .isAfter(dayjs.unix(refreshTokenAlreadyExists.expiresIn));
        const generateTokenProvider = new GenerateTokenProvider();
        const token = await generateTokenProvider.execute(refreshTokenAlreadyExists.userId);
        if (isRefreshTokenExpired) {
            await refreshTokenRepository.delete({ 
                userId: refreshTokenAlreadyExists.userId 
            });
            const generateTokenProvider = new GenerateRefreshToken();
            const refreshedToken = await generateTokenProvider.execute(refreshTokenAlreadyExists.userId);
            return { token , refreshToken: refreshedToken };
        } 
        return { token }
    }

}

export { RefreshTokenService };