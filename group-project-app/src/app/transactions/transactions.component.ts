import { Component, OnInit } from "@angular/core";
import {
  Transaction,
  TransactionService,
} from "../service/transaction.service"; 
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-transactions",
  standalone: true,
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.css"],
  imports: [CommonModule],
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = []; 

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService
      .getTransactions()
      .subscribe((data: Transaction[]) => {
        this.transactions = data;
      });
  }

  get totalIngresos() {
    return this.transactions
      .filter((t) => t.type === "Ingreso")
      .reduce((acc, curr) => acc + curr.amount, 0);
  }

  get totalEgresos() {
    return this.transactions
      .filter((t) => t.type === "Gasto")
      .reduce((acc, curr) => acc + curr.amount, 0);
  }

  get saldoDisponible() {
    return this.totalIngresos - this.totalEgresos;
  }
}
