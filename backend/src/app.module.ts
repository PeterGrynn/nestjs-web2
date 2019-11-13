import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagesService } from './images/images.service';
import { ImagesController } from './images/images.controller';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';

@Module({
  imports: [],
  controllers: [AppController, ImagesController, UsersController],
  providers: [AppService, ImagesService, UsersService]
})
export class AppModule {}
