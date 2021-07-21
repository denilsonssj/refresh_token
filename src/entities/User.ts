import { Entity, PrimaryColumn, Column, OneToOne } from "typeorm";
import { v4 as uuid } from "uuid";

import { RefreshToken } from "./RefreshToken";

@Entity({ name: "users" })
class User {

    @PrimaryColumn()
    id: string;

    @Column({ type: "varchar", length: "64" })
    name: string;

    @Column({ type: "varchar", length: "64" })
    username: string;

    @Column({ type: "varchar", length: "64" })
    password: string;

    @OneToOne(() => RefreshToken, refresh_token => refresh_token.user)
    refreshToken: RefreshToken;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}

export { User };