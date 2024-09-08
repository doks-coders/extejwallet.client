import { Component } from '@angular/core';
import { ActionsService } from 'src/app/_services/actions.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  isDarkMode: boolean = false;
  constructor(public actionService:ActionsService){}
}
