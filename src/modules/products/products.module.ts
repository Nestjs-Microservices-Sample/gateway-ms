import { Module } from '@nestjs/common';

import { NatsModule } from '../../transport/nats.module';
import { ProductsController } from './controllers/products.controller';

@Module({
  imports: [NatsModule],
  controllers: [ProductsController],
})
export class ProductsModule {}
