// src/app/core/services/game.service.ts
import { Injectable, signal } from '@angular/core';

export interface Game {
  id: string;
  title: string;
  genre: string;
  hours: number;
}

@Injectable({ providedIn: 'root' })
export class GameService {
  // Placeholder game data
  private games = signal<Game[]>([
    { id: 'ff7', title: 'Final Fantasy VII', genre: 'RPG / Adventure', hours: 120 },
    { id: 'clair', title: 'Clair Obscur Expedition 33', genre: 'Strategy RPG', hours: 80 },
    { id: 'divinity', title: 'Divinity Original Sin', genre: 'RPG / Adventure', hours: 200 },
    { id: 'chrono', title: 'Chrono Trigger', genre: 'Classic RPG', hours: 150 }
  ]);

  getGames() {
    return this.games;
  }

  getGame(id: string) {
    return this.games().find(g => g.id === id);
  }
}
