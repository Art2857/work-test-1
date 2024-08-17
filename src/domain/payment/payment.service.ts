import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { UserRepository } from '../user/user.repository';
import { PaymentRepository } from './payment.repository';

@Injectable()
export class PaymentService {
  constructor(
    private prisma: PrismaService,
    private userRepository: UserRepository,
    private paymentRepository: PaymentRepository,
  ) {}

  async debitUserBalance(userId: number, amount: number): Promise<void> {
    await this.prisma.$transaction(
      async () => {
        const user = await this.userRepository.findById(userId);

        if (!user || user.balance < amount) {
          throw new Error('Insufficient funds');
        }

        await this.userRepository.updateBalance(userId, user.balance - amount);
        await this.paymentRepository.createPaymentHistory(
          userId,
          'debit',
          amount,
        );
      },
      {
        isolationLevel: 'Serializable',
      },
    );
  }

  async getPaymentHistory(userId: number, page: number, limit: number) {
    return this.paymentRepository.getPaymentHistory(userId, page, limit);
  }
}
