import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';

@Injectable()
export class PaymentRepository {
  constructor(private prisma: PrismaService) {}

  async createPaymentHistory(userId: number, action: string, amount: number) {
    return this.prisma.paymentHistory.create({
      data: {
        user_id: userId,
        action: action,
        amount: amount,
      },
    });
  }

  async getPaymentHistory(userId: number, page: number, limit: number) {
    const skip = (page - 1) * limit;

    const [history, total] = await this.prisma.$transaction([
      this.prisma.paymentHistory.findMany({
        where: { user_id: userId },
        skip: skip,
        take: limit,
        orderBy: { ts: 'desc' },
      }),
      this.prisma.paymentHistory.count({ where: { user_id: userId } }),
    ]);

    return {
      history,
      total,
      page,
      limit,
    };
  }
}
