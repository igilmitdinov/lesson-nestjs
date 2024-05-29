import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

class userResponse {
    @ApiProperty()
    @IsString()
    firstName: string

    @ApiProperty()
    @IsString()
    userName: string

    @ApiProperty()
    @IsString()
    email: string

    @ApiProperty()
    @IsString()
    password: string
}

export class AuthUserResponse {
    @ApiProperty()
    user: userResponse

    @ApiProperty()
    @IsString()
    token: string
    
}