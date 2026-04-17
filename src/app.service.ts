import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransactionDTO } from './dto/create-transaction.dto';
import { UpdateTransactionDTO } from './dto/update-transaction.dto';
import { ITransactionRepository } from './infra/repositories/transaction.repository.abstract';

@Injectable()
export class AppService {
  constructor(private readonly transactionRepository: ITransactionRepository) {

  }
  getHello(): string {
    return 'Hello World!';
  }

  async createTransaction(data: CreateTransactionDTO) {
    const transaction = await this.transactionRepository.create(data);

    return transaction;
  }

  async getTransactions() {
    const transactions = await this.transactionRepository.findAll();
    
    return transactions;
  }

  async deleteTransaction(id: string) {
    const existsTransaction = await this.transactionRepository.findById(id)
    if (!existsTransaction) { 
            throw new NotFoundException('Transaction not found');
    }      
    await this.transactionRepository.delete(id);
  }


  async findTransactionById(id: string) {
    const existsTransaction = await this.transactionRepository.findById(id);
    return existsTransaction;

  }

  async updateTransaction(id: string, data: UpdateTransactionDTO) {
    const existsTransaction = await this.transactionRepository.findById(id)
    if (!existsTransaction) { 
            throw new NotFoundException('Transaction not found');
    }
    const updatedTransaction = await this.transactionRepository.update(id, data)

    return updatedTransaction;
  }

}
