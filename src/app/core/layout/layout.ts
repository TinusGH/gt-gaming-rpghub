import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Home } from '../../features/home/home';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [Navbar, Home],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class Layout {}
