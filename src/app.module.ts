import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VueloModule } from './vuelo/vuelo.module';
import { CompraModule } from './compra/compra.module';

@Module({
  imports: [VueloModule, CompraModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
