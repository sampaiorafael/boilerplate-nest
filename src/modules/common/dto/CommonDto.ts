import { ApiProperty } from "@nestjs/swagger";

export class CommonDto {
    @ApiProperty()
    id: string

    @ApiProperty()
    createdAt: Date

    @ApiProperty()
    updatedAt: Date
}