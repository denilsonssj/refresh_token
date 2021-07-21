import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createRefreshTokens1626791255735 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "refresh_tokens",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "expires_in",
                    type: "integer"
                },
                {
                    name: "user_id",
                    type: "uuid"
                }
            ],
            foreignKeys: [
                {
                    name: "RefreshTokenUser",
                    columnNames: ["user_id"],
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("refresh_tokens");
    }

}
