import { CreateTransactionDTO } from "src/dto/create-transaction.dto";
import { UpdateTransactionDTO } from "src/dto/update-transaction.dto";

export abstract class ITransactionRepository {
   abstract create(data: CreateTransactionDTO); 
   abstract findAll(); 
   abstract findById(id: string);
   abstract delete(id: string);
   abstract update(id: string, data: UpdateTransactionDTO);
}