import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  darkMode = true; // start in dark mode

  toggleTheme() {
    this.darkMode = !this.darkMode;

    if (this.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
