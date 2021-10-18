import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
      // 잘못된 정보가 들어오면 Request를 막아버린다.
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(4000);
}
bootstrap();
