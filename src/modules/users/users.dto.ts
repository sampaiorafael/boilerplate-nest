import { ApiProperty } from "@nestjs/swagger";
import { CommonDto } from "../common/dto/CommonDto";
import { UsersEntity } from "./users.entity";

export class UsersDto extends CommonDto {

    @ApiProperty()
    username: string

    static fromEntity(user: UsersEntity): UsersDto {
        const userDto = new UsersDto()

        userDto.updatedAt = user.updatedAt
        userDto.createdAt = user.createdAt
        userDto.username = user.username

        return userDto
    }

}