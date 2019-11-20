import { Controller, Get, Param, UseInterceptors, UploadedFile, Post } from '@nestjs/common';
import { FileInterceptor, AnyFilesInterceptor } from '@nestjs/platform-express';


@Controller('files')
export class FilesController {

    @Get()
    findAllMemes(): string {
        return 'All memes';
    }

    @Get(':from/:to')
    findOneMeme(@Param('from') from, @Param('to') to): string {
        return `from ${from} to ${to}`;
    }

    @Post('upload')
    @UseInterceptors(AnyFilesInterceptor())
    uploadFile(@UploadedFile() file) {
        console.log(file);
        return file;
    }

}