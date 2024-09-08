import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { TokenResponse } from './_models/response/token.response';
import { AdminRole, ClientRole } from './_constants/role.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  admin = AdminRole;
  client = ClientRole;
  mode: string = AdminRole;
  darkMode = false;

  constructor(private authServce: AuthService) { }
  ngOnInit(): void {
    this.authServce.intialiseToken();
    this.authServce.$mode.subscribe({
      next: (val) => {
        if (val) {
          this.mode = val;
        }
      }
    })

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.darkMode = true;
      document.body.classList.add('dark-mode');
    }
  }


  toggleTheme() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }

}
