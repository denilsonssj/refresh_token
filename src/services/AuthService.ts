import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";

import { UserRepository } from "../repositories/UserRepository";
import { GenerateRefreshToken } from "../provider/GenerateRefreshToken";
import { GenerateTokenProvider } from "../provider/GenerateTokenProvider";
import { RefreshTokenRepository } from "../repositories/RefreshTokenRepository";

type RequestInfo = {
    username: string;
    password: string;
};

class AuthService {

    async execute({ username, password }: RequestInfo) {
        const userRepository = getCustomRepository(UserRepository);
        const userAlreadyExists = await userRepository.findOne({ where: { username }});
        if (!userAlreadyExists) {
            throw new Error("User or password incorrect!");
        }
        const passwordMatch = await compare(password, userAlreadyExists.password);
        if (!passwordMatch) {
            throw new Error("User or password incorrect!");
        }
        const generateTokenProvider = new GenerateTokenProvider();
        const token = await generateTokenProvider.execute(userAlreadyExists.id);
        const refreshTokenRepository = getCustomRepository(RefreshTokenRepository);
        refreshTokenRepository.delete({ userId: userAlreadyExists.id });
        const generateRefreshToken = new GenerateRefreshToken();
        const refreshToken = await generateRefreshToken.execute(userAlreadyExists.id);
        return { token, refreshToken };
    }

}

export { AuthService };