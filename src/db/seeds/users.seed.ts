import { UsersEntity } from "../../modules/users/users.entity";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export default class Users implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {
        await connection
            .createQueryBuilder()
            .insert()
            .into(UsersEntity)
            .values([
                {
                    username: 'foobar' 
                },
                {
                    username: 'test_user'
                },
                {
                    id: '753196a6-bfd9-4e7b-a8da-300868162431',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    username: 'user_test'
                }
            ])
            .execute()
    }

}