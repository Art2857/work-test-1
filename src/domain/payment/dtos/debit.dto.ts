import { ApiProperty } from '@nestjs/swagger';

export class DebitDto {
  @ApiProperty({ type: Number })
  userId: number;

  @ApiProperty({ type: Number })
  amount: number;
}
