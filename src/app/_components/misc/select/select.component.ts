import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ height: '0', opacity: 0 }),
        animate('300ms ease-in', style({ height: '*', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ height: '0', opacity: 0 })),
      ]),
    ]),
  ],
})
export class SelectComponent implements OnInit{

  @Output() selectValueEvent = new EventEmitter();

  @ViewChild('dropDown') dropDown?: ElementRef;

  
  @HostListener('document:click', ['$event'])
  handleClickOutside(event:any) {
    if(this.dropDown){
      if (!this.dropDown.nativeElement.contains(event.target) && !this.dropDown.nativeElement.contains(event.target)) {
        this.isDropdownOpen=false
       }
    }
  }
  
   
    
  ngOnInit(): void {
    this.selectedOption = this.options[0];
    this.selectValueEvent.emit(this.selectedOption.text);
  }
  isDropdownOpen = false;
 
  // Array of options with image and text
  @Input()options: { text: string, image?: string } [] = []
  
  selectedOption: { text: string, image?: string } | null = this.options[0];


  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: { text: string, image?: string }) {
    this.selectedOption = option;
    this.selectValueEvent.emit(option.text);
    this.isDropdownOpen = false;
  }
}

