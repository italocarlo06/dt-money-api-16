export class CreateTransactionDTO {
   id?: string;
   title: string;
   price: number;
   type: 'INCOME' | 'OUTCOME';
   category: string;
   data?: Date;
}