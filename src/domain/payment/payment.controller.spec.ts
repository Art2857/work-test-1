import { Test, TestingModule } from '@nestjs/testing';
import { PaymentController } from './payment.controller';
import { PrismaModule } from '../../core/prisma/prisma.module';
import { UserModule } from '../user/user.module';
import { PaymentRepository } from './payment.repository';
import { PaymentService } from './payment.service';

describe('PaymentController', () => {
  let controller: PaymentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule, UserModule],
      controllers: [PaymentController],
      providers: [PaymentService, PaymentRepository],
    }).compile();

    controller = module.get<PaymentController>(PaymentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
