import { Controller, Get, Param } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { UsersDto } from "./users.dto";
import { UsersService } from "./users.service";

@Controller('users')
@ApiTags('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Get('find/:username')
    @ApiParam({ name: 'username' })
    public async findUserByUsername(
        @Param('username') username: string
    ): Promise<UsersDto> {
        const user = await this.usersService.findUserByUsername(username)
        return UsersDto.fromEntity(user)
    }

}