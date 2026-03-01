import { Component, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  modalOpen = signal(false);
  selectedGame = signal('');

  games = [
    { title: 'Final Fantasy VII', genre: 'RPG / Adventure', hours: 120 },
    { title: 'Clair Obscur Expedition 33', genre: 'RPG / Strategy', hours: 80 },
    { title: 'Divinity: Original Sin', genre: 'RPG / Adventure', hours: 200 },
    { title: 'Chrono Trigger', genre: 'RPG / Classic', hours: 150 }
  ];

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
}
