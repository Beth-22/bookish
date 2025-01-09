import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable validation pipe globally
  app.useGlobalPipes(new ValidationPipe());

  // Set global prefix
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: 'http://127.0.0.1:5500', // Frontend URL
    methods: 'GET,POST,PATCH,DELETE', // Allowed methods
  });

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
