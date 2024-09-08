import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-balance-section',
  templateUrl: './balance-section.component.html',
  styleUrls: ['./balance-section.component.css']
})
export class BalanceSectionComponent {
  @Input() label ="";
  @Input() amount:number=0;
}
