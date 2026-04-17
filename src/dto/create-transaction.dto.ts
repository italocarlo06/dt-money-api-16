import { IsDate, IsIn, IsNumber, IsOptional, IsString, Min } from "class-validator";
import { Type } from "class-transformer";

export class CreateTransactionDTO {
   @IsString()
   @IsOptional()
   id?: string;
   @IsString()
   title: string;
   @IsNumber()
   @Min(0.01, { message: 'O preço deve ser um número positivo' })
   price: number;
   @IsIn(['INCOME', 'OUTCOME'], { message: 'O tipo deve ser INCOME ou OUTCOME'})
   type: 'INCOME' | 'OUTCOME';
   @IsString()
   category: string;
   @IsOptional()
   @IsDate({ message: 'A data deve ser uma data válida' })
   @Type(() => Date)
   data?: Date;
}