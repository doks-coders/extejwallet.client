import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActionsService } from 'src/app/_services/actions.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  constructor(public actionService:ActionsService){}
  ngOnInit(): void {
    // Check for previously saved theme
    
  }

  


 
}
