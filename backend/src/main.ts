import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';
import * as compression from 'compression';
import { Logger } from '@nestjs/common';

const port = process.env.PORT || 5000;


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(helmet());
  app.use(compression());
  await app.listen(5000);

  Logger.log(`Server running on http://localhost:${port}...`, 'Bootstrap');
}
bootstrap();
