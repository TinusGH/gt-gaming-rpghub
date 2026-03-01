import { Injectable, signal } from '@angular/core';

export interface StreamSession {
  id: string;
  title: string;
  platform: 'YouTube' | 'Twitch' | 'Kick' | 'Rumble';
  vodUrl: string;
}

export interface GameDetailData {
  id: string;
  title: string;
  cover: string; // image URL or placeholder
  genre: string;
  hours: number;
  votes: { up: number; down: number };
  sessions: StreamSession[];
}

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private games: GameDetailData[] = [
  {
    id: 'ff7',
    title: 'Final Fantasy VII',
    cover: 'https://via.placeholder.com/200x300?text=FF7',
    genre: 'RPG / Adventure',
    hours: 120,
    votes: { up: 42, down: 5 },
    sessions: [
      { id: 's1', title: "Let's Play FF7 #1", platform: 'Twitch', vodUrl: '#' },
      { id: 's2', title: 'Chill FF7 Stream', platform: 'YouTube', vodUrl: '#' },
    ],
  },
  {
    id: 'clair',
    title: 'Clair Obscur Expedition 33',
    cover: 'https://via.placeholder.com/200x300?text=Clair',
    genre: 'RPG / Strategy',
    hours: 80,
    votes: { up: 18, down: 2 },
    sessions: [
      { id: 's3', title: 'Strategy Stream', platform: 'Kick', vodUrl: '#' },
    ],
  },
];

  getGameById(id: string) {
    return this.games.find((g) => g.id === id) || null;
  }
}
