import { Controller, Get, Post, Param, Body, Ip } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/createComment.dto';
import { ScoreDto } from './dto/score.dto';

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) {}

    @Get()
    findAll() {
        return this.commentsService.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id) {
        return this.commentsService.findOne(id);
    }

    @Post('create')
    create(@Body() comment: CreateCommentDto) {
        return this.commentsService.create(comment);
    }

    @Post('score/:id')
    score(@Body() scoreDto: ScoreDto, @Param('id') id) {
        console.log(id);
        return this.commentsService.score(scoreDto);
    }

}