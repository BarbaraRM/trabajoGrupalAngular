import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-transaction-table',
  standalone:true,
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.css'],
  imports: [CommonModule],

})
export class TransactionTableComponent {
  @Input() transactions: any[] = [];
}
