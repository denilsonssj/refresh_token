import { getCustomRepository } from "typeorm";
import dayjs from "dayjs";

import { RefreshTokenRepository } from "../repositories/RefreshTokenRepository";

class GenerateRefreshToken {
    async execute(userId: string) {
        const expiresIn = dayjs().add(15, "second").unix();
        const refreshTokenRepository = getCustomRepository(RefreshTokenRepository);
        const generateRefreshToken = refreshTokenRepository.create({
            userId,
            expiresIn
        });
        await refreshTokenRepository.save(generateRefreshToken);
        return generateRefreshToken;
    }
}

export { GenerateRefreshToken };