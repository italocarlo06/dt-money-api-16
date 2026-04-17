import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaTransactionRepository } from './infra/repositories/prisma/prisma.transaction.repository';
import { ITransactionRepository } from './infra/repositories/transaction.repository.abstract';
import { PrismaService } from './shared/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService, {
    provide: ITransactionRepository,
    useClass: PrismaTransactionRepository
  }],
})
export class AppModule {}
