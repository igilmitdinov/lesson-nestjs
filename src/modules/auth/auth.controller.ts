import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from '../user/dto';
import { UserLoginDTO } from './dto';
import { AuthUserResponse } from './response';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-quard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authSerivce: AuthService) {}

    @ApiTags('API')
    @ApiResponse({status: 201, type: CreateUserDTO})
    @Post('register')
    register(@Body() dto: CreateUserDTO): Promise<CreateUserDTO> {
        return this.authSerivce.registerUsers(dto)
    } 

    @ApiTags('API')
    @ApiResponse({status: 200, type: AuthUserResponse})
    @Post('login')
    login (@Body() dto: UserLoginDTO): Promise<AuthUserResponse>{
        return this.authSerivce.loginUser(dto)
    }

    @UseGuards(JwtAuthGuard)
    @Post('test')
    test () {
        return true
    }
}
