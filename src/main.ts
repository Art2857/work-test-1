import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  swagger(app, 'api', 'API', 'API description');

  await app.listen(3000);
}
bootstrap();
