import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Interface 
export interface Transaction {
  name: string;   
  type: 'Ingreso' | 'Gasto';  
  amount: number;  
  date: string;   
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor() { }

  getTransactions(): Observable<Transaction[]> {
    const transactions: Transaction[] = [
      { name: 'Venta de producto A', type: 'Ingreso', amount: 1000, date: '2024-12-01' },
      { name: 'Compra de materiales', type: 'Gasto', amount: 300, date: '2024-12-02' },
      { name: 'Venta de producto B', type: 'Ingreso', amount: 500, date: '2024-12-03' },
      { name: 'Pago de servicios', type: 'Gasto', amount: 200, date: '2024-12-04' },
    ];
    
    return of(transactions);
  }
}
