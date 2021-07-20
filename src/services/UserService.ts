import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";

import { UserRepository } from "../repositories/UserRepository";

type UserInfo = {
    name: string;
    username: string;
    password: string;
};

class UserService {

    async save({ name, username, password }: UserInfo) {
        const userRepository: UserRepository = getCustomRepository(UserRepository);
        const userAlreadyExists = await userRepository.findOne({where: { username }});
        console.log(userAlreadyExists);
        if (userAlreadyExists) {
            throw new Error("User Already Exists");
        }
        const passwordHashed = await hash(password, 8);
        const user = userRepository.create({
            name, 
            username,
            password: passwordHashed,
        });
        await userRepository.save(user);
        return user;
    }

}

export { UserService };