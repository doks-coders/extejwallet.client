import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CardResponse } from 'src/app/_models/response/card.response';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit,AfterViewInit {
  @ViewChild("container") container?:ElementRef
  ngOnInit(): void {
    // Use screen width
    this.numItems = 999;
    
  }

  constructor(public router:Router){}
  ngAfterViewInit(): void {
    if(this.container){
      let el = this.container.nativeElement as HTMLDivElement
    }
   
  }
  @Input()account_cards:CardResponse [] = []; // Example account_cards
  
  currentIndex = 0;
  itemWidth = 220; // Use screen width
  numItems = 999;
  startX = 0;
  endX = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    //this.itemWidth = window.innerWidth;
  }

  get currentTranslateX() {
    return -this.currentIndex * this.itemWidth;
  }

  
  prev() {
   if (this.currentIndex > 0) {
      //this.account_cards  = [this.account_cards[this.account_cards.length-1], ...this.account_cards] 
      this.currentIndex--;
    }
  }

  next() {
    if (this.currentIndex < this.numItems - 1) {
      if(this.account_cards[this.currentIndex]!=this.account_cards[this.account_cards.length-1]){
        this.account_cards.push(this.account_cards[this.currentIndex])
      }
     
      this.currentIndex++;

    }
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    this.endX = event.changedTouches[0].clientX;
    this.handleSwipe();
  }

  private handleSwipe() {
    if (this.startX - this.endX > 50) {
      this.next();
    } else if (this.endX - this.startX > 50) {
      this.prev();
    }
  }


  
}