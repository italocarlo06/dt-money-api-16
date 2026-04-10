export class UpdateTransactionDTO {
   title: string;
   price: number;
   type: 'INCOME' | 'OUTCOME';
   category: string;
   data?: Date;
}