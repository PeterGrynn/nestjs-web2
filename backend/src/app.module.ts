import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import config from './config/keys';
import { HelloController } from './learn/hello.controller';
import { MemesController } from './memes/memes.controller';
import { MemesService } from './memes/memes.service';

@Module({
  imports: [MongooseModule.forRoot(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true}), AuthModule],
  controllers: [AppController, UsersController, HelloController, MemesController],
  providers: [AppService, UsersService, MemesService]
})
export class AppModule {}
