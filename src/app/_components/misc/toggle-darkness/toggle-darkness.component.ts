import { Component } from '@angular/core';
import { ActionsService } from 'src/app/_services/actions.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-toggle-darkness',
  templateUrl: './toggle-darkness.component.html',
  styleUrls: ['./toggle-darkness.component.css'],
  animations: [
    trigger('toggleSwitch', [
      state('off', style({
        transform: 'translateX(0)',
      })),
      state('on', style({
        transform: 'translateX(100%)',
      })),
      transition('off <=> on', [
        animate('300ms ease-in-out')
      ])
    ])
  ]   
})
export class ToggleDarknessComponent {
  constructor(public actionService:ActionsService){}
}
