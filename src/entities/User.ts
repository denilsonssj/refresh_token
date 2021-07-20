import { Entity, PrimaryColumn, Column } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity({ name: "users" })
class User {

    @PrimaryColumn()
    id: string;

    @Column({ type: "varchar",length: "64" })
    name: string;

    @Column({ type: "varchar",length: "64" })
    username: string;

    @Column({ type: "varchar",length: "64" })
    password: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}

export { User };