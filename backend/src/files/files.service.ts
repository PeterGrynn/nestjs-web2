import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { File } from './interfaces/file.interaface';
import { Binary } from '@babel/types';

@Injectable()
export class FilesService {
    constructor(@InjectModel('File') private readonly fileModel: Model<File>) {}
    
    async create(img: Binary): Promise<File> {
        
        return this.fileModel.save(img);
    }

    async getAll(): Promise<File[]> {
        return this.fileModel.find().exec();
    }
}