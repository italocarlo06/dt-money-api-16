import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTransactionDTO } from './dto/create-transaction.dto';
import type { Response } from 'express';
import { UpdateTransactionDTO } from './dto/update-transaction.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/transactions')
  async createTransaction(@Body() data: CreateTransactionDTO) {
    return this.appService.createTransaction(data);
  }

  @Put('/transactions/:id')
  async updateTransaction(@Param('id') id: string, @Body() data: UpdateTransactionDTO) {
    return this.appService.updateTransaction(id, data);
  }

  @Get('/transactions')
  async getTransactions() {
    return this.appService.getTransactions()
  }

  @Get('/transactions/:id')
  async findTransactionById(@Param('id') id: string, @Res()res: Response) {
    const transaction = await this.appService.findTransactionById(id);
    return res.status(200).json(transaction);
  }

  @Delete('/transactions/:id')
  async deleteTransaction(@Param('id') id: string, @Res()res: Response) {
    await this.appService.deleteTransaction(id);
    return res.status(204).send();
  }
}
