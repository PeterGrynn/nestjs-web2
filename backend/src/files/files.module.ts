import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileSchema } from './schemas/file.schema';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
    imports: [MongooseModule.forFeature([{name: 'File', schema: FileSchema}]),
                MulterModule.register({
                    dest: './upload',
                })],
    controllers: [FilesController],
    providers: [FilesService],
})

export class FilesModule {}