import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async getUserById(userId: number) {
    return this.userRepository.findById(userId);
  }

  async createUser(initialBalance: number) {
    return this.userRepository.create(initialBalance);
  }

  async getAllUsers() {
    return this.userRepository.findAll();
  }

  async updateUserBalance(userId: number, newBalance: number) {
    return this.userRepository.updateBalance(userId, newBalance);
  }
}
