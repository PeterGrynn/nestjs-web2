import * as mongoose from 'mongoose';

export const FileSchema = new mongoose.Schema({
    file: Buffer,
})
