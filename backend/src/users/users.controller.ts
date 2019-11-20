import { Controller, Get, Body, Post, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async findAll(): Promise<User[]> {
        return await this.usersService.findAll();
    }

    @Post('create')
    async create(@Body() createUserDto: CreateUserDto): Promise<any> {
        return await this.usersService.create(createUserDto);
    }

    @Get('id/:user')
    async findUser(@Param('user') user): Promise<User> {
        return await this.usersService.findUser(user);
    }

    @Get('delete')
    async deleteAll(): Promise<string> {
        return await this.usersService.delete();
    }
}