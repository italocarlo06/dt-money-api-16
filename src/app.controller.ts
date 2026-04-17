import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
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
  async createTransaction(@Body() data: CreateTransactionDTO, @Res() res: Response) {
    const transaction = await this.appService.createTransaction(data);
    return res.status(HttpStatus.CREATED).json(transaction);
  }

  @Put('/transactions/:id')
  async updateTransaction(
    @Param('id') id: string, 
    @Body() data: UpdateTransactionDTO,
    @Res() res: Response){
    const updatedTransaction = await this.appService.updateTransaction(id, data);
    return res.status(HttpStatus.OK).json(updatedTransaction);
  }

  @Get('/transactions')
  async getTransactions(@Res() res: Response) {
    const transactions = await this.appService.getTransactions();
    return res.status(HttpStatus.OK).json(transactions);
  }

  @Get('/transactions/:id')
  async findTransactionById(@Param('id') id: string, @Res()res: Response) {
    const transaction = await this.appService.findTransactionById(id);
    return res.status(HttpStatus.OK).json(transaction);
  }

  @Delete('/transactions/:id')
  async deleteTransaction(@Param('id') id: string, @Res()res: Response) {
    await this.appService.deleteTransaction(id);
    return res.status(HttpStatus.NO_CONTENT).send();
  }
}
