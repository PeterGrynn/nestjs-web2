import { Controller, Get, Param, UseInterceptors, UploadedFile, Post, Res } from '@nestjs/common';
import { FileInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { diskStorage } from 'multer';
import { extname } from 'path';

const fs = require('fs');



@Controller('files')
export class FilesController {
    constructor(private readonly filesService: FilesService) {}

    @Get()
    findAllMemes(): string {
        return 'all';
    }

    @Get(':from/:to')
    findOneMeme(@Param('from') from, @Param('to') to): string {
        return `from ${from} to ${to}`;
    }

    @Post('create')
    @UseInterceptors(FileInterceptor('file',
    {
      storage: diskStorage({
        destination: './avatars', 
        filename: (req, file, cb) => {
        const randomName = 1;
        return cb(null, `${randomName}${extname(file.originalname)}`)
      }
      })
    }
  )
  )
    uploadImage(@UploadedFile() file, @Res() res) {
        console.log(file);
    }

    @Get(':imgpath')
    getImage(@Param('imgpath') img, @Res() res){
        return res.sendFile(img, {root: './avatars'});
    }


}