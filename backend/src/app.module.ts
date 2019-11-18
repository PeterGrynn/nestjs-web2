import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';
import { UsersModule } from './users/users.module';
import { MemsModule } from './mems/mems.module';
import { CommentsModule } from './comments/comments.module';

export const MongoConnection = MongooseModule.forRoot(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true});

@Module({
  imports: [MongoConnection, UsersModule, MemsModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
