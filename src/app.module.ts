import { Module } from '@nestjs/common';

import { AppService } from './app.service';

import { AppController } from './app.controller';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
