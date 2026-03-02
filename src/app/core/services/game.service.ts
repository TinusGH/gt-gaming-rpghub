import { Injectable } from '@angular/core';

export type StreamType = 'lets-play' | 'chill';
export type Platform = 'YouTube' | 'Twitch' | 'Kick' | 'Rumble';

export interface StreamSession {
  id: string;
  title: string;
  platform: Platform;
  vodUrl: string;
}

export interface Game {
  id: string;
  title: string;
  cover: string;
  genre: string;
  hours: number;
  streamType: StreamType;
  votes: { up: number; down: number };
  sessions: StreamSession[];
}

@Injectable({ providedIn: 'root' })
export class GameService {
  private games: Game[] = [
    {
      id: 'ff7',
      title: 'Final Fantasy VII',
      cover: 'assets/covers/ff7.jpg',
      genre: 'RPG / Adventure',
      hours: 120,
      streamType: 'lets-play',
      votes: { up: 42, down: 5 },
      sessions: [
        { id: 's1', title: "Let's Play FF7 #1", platform: 'Twitch', vodUrl: '#' },
        { id: 's2', title: "Let's Play FF7 #2", platform: 'YouTube', vodUrl: '#' },
      ],
    },
    {
      id: 'clair',
      title: 'Clair Obscur: Expedition 33',
      cover: 'assets/covers/clair.jpg',
      genre: 'RPG / Strategy',
      hours: 80,
      streamType: 'lets-play',
      votes: { up: 18, down: 2 },
      sessions: [
        { id: 's3', title: "Let's Play Clair Obscur #1", platform: 'Kick', vodUrl: '#' },
        { id: 's4', title: "Let's Play Clair Obscur #2", platform: 'Rumble', vodUrl: '#' },
      ],
    },
    {
      id: 'divinity',
      title: 'Divinity: Original Sin',
      cover: 'assets/covers/divinity.jpg',
      genre: 'RPG / Adventure',
      hours: 200,
      streamType: 'lets-play',
      votes: { up: 35, down: 3 },
      sessions: [
        { id: 's5', title: "Let's Play Divinity #1", platform: 'Twitch', vodUrl: '#' },
        { id: 's6', title: "Let's Play Divinity #2", platform: 'YouTube', vodUrl: '#' },
      ],
    },
    {
      id: 'chrono',
      title: 'Chrono Trigger',
      cover: 'assets/covers/chrono.jpg',
      genre: 'RPG / Classic',
      hours: 150,
      streamType: 'lets-play',
      votes: { up: 60, down: 1 },
      sessions: [
        { id: 's7', title: "Let's Play Chrono Trigger #1", platform: 'YouTube', vodUrl: '#' },
        { id: 's8', title: "Let's Play Chrono Trigger #2", platform: 'Kick', vodUrl: '#' },
      ],
    },
  ];

  getGames(): Game[] {
    return this.games;
  }

  getGameById(id: string): Game | null {
    return this.games.find(g => g.id === id) ?? null;
  }
}
