import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async create(createUserDto: CreateUserDto): Promise<User> {

        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save((err) => {
            return {
                error: 400,
                message: "Users already exist"
            }
        });
    }

    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async findUser(user: string): Promise<User> {

        return await this.userModel.find({username: user});
    }

    async delete() {
        return await this.userModel.remove();
    }
}
