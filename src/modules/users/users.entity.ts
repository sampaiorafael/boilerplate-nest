import { Column, Entity } from "typeorm";
import { CommonEntity } from "../common/entity/CommonEntity";

@Entity('users')
export class UsersEntity extends CommonEntity {

    @Column({ name: 'username', type: 'varchar', length: '10', unique: true, nullable: false })
    username: string

}