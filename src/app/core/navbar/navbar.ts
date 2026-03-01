import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  private router = inject(Router);

  darkMode = false; // <-- set LIGHT mode as default

  toggleTheme() {
    this.darkMode = !this.darkMode;

    if (this.darkMode) {
      document.documentElement.classList.add('dark'); // apply dark theme
    } else {
      document.documentElement.classList.remove('dark'); // revert to light theme
    }
  }

  goHome() {
    this.router.navigate(['/']);
  }

}
