import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-card',
  standalone: true,
  templateUrl: './total-card.component.html',
  styleUrls: ['./total-card.component.css']
})
export class TotalCardComponent {
  @Input() title: string = '';
  @Input() amount: number = 0;
  @Input() iconPath: string = '';
}
