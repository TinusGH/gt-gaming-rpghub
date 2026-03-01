import { Component, signal, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  private router = inject(Router);

  modalOpen = signal(false);
  selectedGame = signal('');

  games = [
    { id: 'ff7', title: 'Final Fantasy VII', genre: 'RPG / Adventure', hours: 120 },
    { id: 'clair', title: 'Clair Obscur Expedition 33', genre: 'RPG / Strategy', hours: 80 },
    { id: 'divinity', title: 'Divinity: Original Sin', genre: 'RPG / Adventure', hours: 200 },
    { id: 'chrono', title: 'Chrono Trigger', genre: 'RPG / Classic', hours: 150 }
  ];

  // Open Subscribe modal
  openSubscribeModal(game: string) {
    this.selectedGame.set(game);
    this.modalOpen.set(true);
  }

  closeModal() {
    this.modalOpen.set(false);
  }

  confirmSubscribe() {
    alert(`Subscribed to ${this.selectedGame()}!`);
    this.closeModal();
  }

  // Navigate to GameDetail page
  goToGame(id: string) {
    this.router.navigate(['/game', id]);
  }
}
