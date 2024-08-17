import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './domain/payment/payment.module';
import { UserModule } from './domain/user/user.module';

@Module({
  imports: [PaymentModule, UserModule, PaymentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
