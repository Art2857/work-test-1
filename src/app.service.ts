import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly started = new Date();

  getPing() {
    return this.started;
  }
}
