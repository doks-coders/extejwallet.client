import { Component } from '@angular/core';
import { ActionsService } from 'src/app/_services/actions.service';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-side-bar-mobile',
  templateUrl: './side-bar-mobile.component.html',
  styleUrls: ['./side-bar-mobile.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),  // Start off-screen to the left
        animate('200ms ease-in', style({ transform: 'translateX(0)', opacity: 1 })),  // Slide in
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ transform: 'translateX(-100%)', opacity: 0 })),  // Slide out
      ]),
    ]),
  ]
})
export class SideBarMobileComponent {
  sideBarButtonClass=" p-3 flex hover:text-white items-center justify-start gradient-bg-hover hover:bg-opacity-70  transition-all duration-200 rounded-[10px]"
  spanClass = "block label ml-4  overflow-hidden  w-auto transition-all duration-300";

  constructor(public actionService:ActionsService){}
}
