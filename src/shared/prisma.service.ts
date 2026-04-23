import { Injectable } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../generated/prisma/client';
//@Injectable()
/*export class PrismaService extends PrismaClient {
  constructor() {
    const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL });
    super({ adapter });
  }
}*/

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    // Create PostgreSQL connection pool and adapter for Prisma 7
    const connectionString = process.env.DATABASE_URL!;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const adapter = new PrismaPg({ connectionString });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    super({ adapter });
  }
}
