import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // CORS 활성화
  app.enableCors({
    origin: 'http://localhost:3001', // Next.js 서버 주소
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
