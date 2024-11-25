import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [ServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
