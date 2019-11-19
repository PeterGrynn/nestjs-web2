import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';
import * as compression from 'compression';

const likesLimit = rateLimit({
  windowMs: 1000 * 60 * 60 * 24,
  max: 2,
});


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(helmet());
  app.use(compression());
  app.use('/comments/score/:id', likesLimit);
  await app.listen(5000);
}
bootstrap();
