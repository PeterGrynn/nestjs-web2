import { Controller, Get, Param } from '@nestjs/common';

@Controller('files')
export class FilesController {

    @Get()
    findAllMemes(): string {
        return 'All memes';
    }

    @Get(':id')
    findOneMeme(@Param('id') id): string {
        return `Meme ID: ${id}`;
    }
}