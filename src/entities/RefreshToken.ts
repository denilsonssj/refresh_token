import { Entity, PrimaryColumn, Column, OneToOne } from "typeorm";
import { v4 as uuid } from "uuid";

import { User } from "./User";

@Entity({ name: "refresh_tokens" })
class RefreshToken {

    @PrimaryColumn()
    id: string;

    @Column({ name: "expires_in" })
    expiresIn: number;

    @Column({ name: "user_id", type: "uuid" })
    userId: string;

    @OneToOne(() => User, user => user.refreshToken)
    user: User;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}

export { RefreshToken };