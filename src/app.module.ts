import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandsModule } from './brands/brands.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [BrandsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
