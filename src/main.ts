import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { envs } from './core/config';
import { RpcCustomExceptionFilter } from './core/exceptions/rpc-custom-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new RpcCustomExceptionFilter());

  await app.listen(envs.port);
}
bootstrap();
