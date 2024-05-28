import { Body, Controller, Delete, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDTO } from './dto';
import { JwtAuthGuard } from 'src/guards/jwt-quard';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
export class UserController {
    constructor(private readonly userSevice: UserService) {}
    
    @ApiTags('API')
    @ApiResponse({status:200, type: UpdateUserDTO})
    @UseGuards(JwtAuthGuard)
    @Patch()
    updateUser(@Body() updateDto: UpdateUserDTO, @Req() request): Promise<UpdateUserDTO> {
        const user = request.user
        console.log(user)
        if (!user) {
            throw new Error('User not found');
        }
        return this.userSevice.updateUser(user.email, updateDto)
    }

    @ApiTags('API')
    @UseGuards(JwtAuthGuard)
    @Delete()
    deleteUser (@Req() request) {
        const user = request.user
        console.log(user)
        return this.userSevice.deleteUser(user.email)
    }

}
