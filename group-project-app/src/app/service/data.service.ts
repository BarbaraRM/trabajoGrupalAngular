import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSource = new BehaviorSubject({
    all: [500, 300, 200, 400, 100],
    expenses: [300, 200, 100, 400, 50],
    income: [200, 100, 100, 0, 50],
  });

  data$ = this.dataSource.asObservable();

  updateData(newData: any) {
    this.dataSource.next(newData);
  }

  addTransaction(type: 'income' | 'expenses', value: number) {
    const currentData = this.dataSource.getValue();
  
    if (!currentData[type]) {
      currentData[type] = [];
    }
    if (!currentData.all) {
      currentData.all = [];
    }
  
    currentData[type].push(value);
    currentData.all.push(value);
  
    this.updateData(currentData);
  }
  
}
