import { Module } from '@nestjs/common';
import { VueloService } from './vuelo.service';
import { VueloController } from './vuelo.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [VueloController],
  providers: [VueloService],
  imports: [PrismaModule]
})
export class VueloModule {}
