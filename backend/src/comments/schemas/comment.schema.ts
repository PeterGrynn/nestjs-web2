import * as mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema({
    id: Number,
    author: String,
    comment: String,
    score: Number,
})



