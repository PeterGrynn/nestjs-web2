import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { FilesModule } from './files/files.module';
import * as rateLimit from 'express-rate-limit';
const { check, sanitize } = require('express-validator');

const likesLimit = rateLimit({
  windowMs: 1000 * 60,
  max: 10,
});


export const MongoConnection = MongooseModule.forRoot(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true});

@Module({
  imports: [MongoConnection, UsersModule, FilesModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(likesLimit)
      .forRoutes('/comments/score/*');
  }
}
