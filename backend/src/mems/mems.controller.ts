import { Controller, Get, Param } from '@nestjs/common';

@Controller('mems')
export class MemsController {

    @Get()
    findAllMemes(): string {
        return 'All memes';
    }

    @Get(':id')
    findOneMeme(@Param('id') id): string {
        return `Meme ID: ${id}`;
    }
}