import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { envs, NATS_SERVICE } from '../core/config';

const NatsModuleRegister = ClientsModule.register([
  {
    name: NATS_SERVICE,
    transport: Transport.NATS,
    options: {
      servers: envs.natsServers,
    },
  },
]);

@Module({
  imports: [NatsModuleRegister],
  exports: [NatsModuleRegister],
})
export class NatsModule {}
