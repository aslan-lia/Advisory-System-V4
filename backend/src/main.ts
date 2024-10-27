// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// main.ts (in your NestJS backend)
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000', // Allow frontend
  });
  await app.listen(4000);
}
bootstrap();

