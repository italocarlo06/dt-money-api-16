import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './shared/prisma.service';
import { CreateTransactionDTO } from './dto/create-transaction.dto';
import { UpdateTransactionDTO } from './dto/update-transaction.dto';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {

  }
  getHello(): string {
    return 'Hello World!';
  }

  async createTransaction(data: CreateTransactionDTO) {
    const transaction = await this.prisma.transaction.create({
      data
    });

    return transaction;
  }

  async getTransactions() {
    const transactions = await this.prisma.transaction.findMany();
    
    return transactions;
  }

  async deleteTransaction(id: string) {
    const existsTransaction = await this.prisma.transaction.findUnique({
      where: {
        id
      }
    })

    if (!existsTransaction) {
      throw new NotFoundException('Transaction not found');
    }

    await this.prisma.transaction.delete({
      where: {
        id
      }
    })

  }


  async findTransactionById(id: string) {
    const existsTransaction = await this.prisma.transaction.findUnique({
      where: {
        id
      }
    })

    if (!existsTransaction) {
      throw new NotFoundException('Transaction not found');
    }

    return existsTransaction;

  }

  async updateTransaction(id: string, data: UpdateTransactionDTO) {
    const existsTransaction = await this.prisma.transaction.findUnique({
      where: {
        id
      }
    })

    if (!existsTransaction) {
      throw new NotFoundException('Transaction not found');
    }

    const updatedTransaction = await this.prisma.transaction.update({
      where: {
        id       
      },
      data
    })

    return updatedTransaction;
  }

}
