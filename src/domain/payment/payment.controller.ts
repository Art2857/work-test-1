import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { PaymentService } from './payment.service';
import { ApiTags } from '@nestjs/swagger';
import { DebitDto } from './dtos/debit.dto';

@ApiTags('Payment')
@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @Post('debit')
  async debitUserBalance(@Body() debitDto: DebitDto) {
    return this.paymentService.debitUserBalance(
      debitDto.userId,
      debitDto.amount,
    );
  }

  @Get(':userId/history')
  async getPaymentHistory(
    @Param('userId', ParseIntPipe) userId: number,
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 10,
  ) {
    return this.paymentService.getPaymentHistory(userId, page, limit);
  }
}
