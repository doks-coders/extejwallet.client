import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  sideBarVisibilityHandler = new BehaviorSubject<boolean>(false)
  $sideBarVisible=this.sideBarVisibilityHandler.asObservable();

  darkModeHandler = new BehaviorSubject<boolean>(false)
  $darkMode=this.darkModeHandler.asObservable();


  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.darkModeHandler.next(true)
      document.body.classList.add('dark');
    }

    this.$darkMode.subscribe({
      next:(value)=>{
        if (value) {
          document.body.classList.add('dark-mode');
          localStorage.setItem('theme', 'dark');
        } else {
          document.body.classList.remove('dark-mode');
          localStorage.setItem('theme', 'light');
        }
    
         const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        console.log(prefersDarkMode);
      }
    })
   }

  displaySideBar(boolean:boolean){
    this.sideBarVisibilityHandler.next(boolean);
  }
  switchDarkMode(boolean:boolean){
    this.darkModeHandler.next(boolean);
  }
  toggleTheme(): void {
    this.$darkMode.pipe(take(1)).subscribe({
      next:(bool)=>{
        let toggle = !bool
        document.body.classList.toggle('dark');
        this.switchDarkMode(toggle);
      }
    })
   
  }
}
