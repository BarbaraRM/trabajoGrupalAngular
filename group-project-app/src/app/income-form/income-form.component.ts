import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-income-form',
  standalone: true,
  templateUrl: './income-form.component.html',
  styleUrls: ['./income-form.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class IncomeFormComponent {

  formData = { name: '', type: 'income', price: 0 };
  
  constructor(private dataService: DataService) {}
  isFormHidden = true;

  toggleForm() {
    this.isFormHidden = !this.isFormHidden;
  }
  
  submitForm() {
    const { type, price } = this.formData;
    this.dataService.addTransaction(
      type as 'income' | 'expenses',
      Number(price)
    );
    this.formData = { name: '', type: 'income', price: 0 };
  }
}
