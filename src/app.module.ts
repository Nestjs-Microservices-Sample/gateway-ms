import { Module } from '@nestjs/common';

import { NatsModule } from './transport/nats.module';

import { IdentityModule } from './modules/identity/identity.module';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [NatsModule, ProductsModule, IdentityModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
