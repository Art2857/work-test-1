import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async findById(userId: number) {
    return this.prisma.user.findUnique({ where: { id: userId } });
  }

  async create(initialBalance: number) {
    return this.prisma.user.create({
      data: {
        balance: initialBalance,
      },
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async updateBalance(userId: number, newBalance: number) {
    return this.prisma.user.update({
      where: { id: userId },
      data: { balance: newBalance },
    });
  }
}
