import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UserRepository } from "../repositories/UserRepository";

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
        const token = sign({}, process.env.SECRET_KEY, {
            subject: userAlreadyExists.id,
            expiresIn: "20s"
        });
        return { token };
    }

}

export { AuthService };