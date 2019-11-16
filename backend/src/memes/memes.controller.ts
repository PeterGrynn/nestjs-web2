import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { CreateMemeDto } from './create-meme.dto';
import { MemesService } from './memes.service';
import { Meme } from './meme.interface';
 
@Controller('memes')
export class MemesController {
    constructor(private readonly memeService: MemesService) {

    }

    @Get()
    async findAll(): Promise<Meme[]> {
        return this.memeService.findAll();
    }

    @Post()
    async create(@Body() createMemeDto: CreateMemeDto){
        this.memeService.create(createMemeDto);
    }
    @Delete(':id')
    removeOne(@Param('id') id): string {
        return `This action remove meme with ID ${id}`;
    }
}