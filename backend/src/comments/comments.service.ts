import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Comment } from './interfaces/comment.interface';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCommentDto } from './dto/createComment.dto';
import { ScoreDto } from './dto/score.dto';

@Injectable()
export class CommentsService {
    constructor(@InjectModel('Comment') private readonly commentModel: Model<Comment>) {}

    async create(createCommentDto: CreateCommentDto): Promise<Comment> {
        const createdComment = new this.commentModel(createCommentDto);
        return createdComment.save();
    }

    async findAll(): Promise<Comment[]> {
        return await this.commentModel.find().exec();
    }

    async findOne(id: any): Promise<Comment[]> {
        console.log(typeof id);
        if(id.length < 10){
            return await this.commentModel.find({id: id});
        } else {
            return await this.commentModel.find({_id: id});
        }
    }

    async score(scoreDto: ScoreDto): Promise<Comment[]> {
        const comment = await this.commentModel.findOne({_id: scoreDto.id});
        if (scoreDto.type) {
            comment.score++;
        } else {
            comment.score--;
        }
        return comment.save();
    }
}