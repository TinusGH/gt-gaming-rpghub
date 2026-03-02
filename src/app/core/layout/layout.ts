import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { routeAnimations } from '../animations/route.animations';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [Navbar, RouterOutlet],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css'],
  animations: [routeAnimations]
})
export class Layout {
  getRouteData(outlet: RouterOutlet) {
    return outlet.activatedRouteData?.['animation'];
  }
}
