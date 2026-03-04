import { Component, OnInit, inject, signal } from '@angular/core';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { GameService, Game, StreamSession, Platform } from '../../core/services/game.service';

@Component({
  selector: 'app-game-detail',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './game-detail.html',
  styleUrls: ['./game-detail.css'],
})
export class GameDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private gameService = inject(GameService);
  // [CL-11.1] SEO: Title service sets the browser tab title dynamically from the loaded game name
  private titleService = inject(Title);

  game = signal<Game | null>(null);
  modalOpen = signal(false);
  selectedSession = signal<StreamSession | null>(null);

  private readonly platformColors: Record<Platform, string> = {
    YouTube: 'bg-red-600',
    Twitch:  'bg-purple-600',
    Kick:    'bg-green-600',
    Rumble:  'bg-orange-500',
  };

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const game = this.gameService.getGameById(id);
      this.game.set(game);
      // [CL-11.1] SEO: Set unique per-game page title; fallback to generic if game not found
      if (game) {
        this.titleService.setTitle(`${game.title} | GT_Gaming Hub`);
      } else {
        this.titleService.setTitle('Game Not Found | GT_Gaming Hub');
      }
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }

  platformClass(platform: Platform): string {
    return this.platformColors[platform] ?? 'bg-surface';
  }

  onCoverError(event: Event) {
    (event.target as HTMLImageElement).style.display = 'none';
  }

  upvote() {
    const g = this.game();
    if (g) this.game.set({ ...g, votes: { ...g.votes, up: g.votes.up + 1 } });
  }

  downvote() {
    const g = this.game();
    if (g) this.game.set({ ...g, votes: { ...g.votes, down: g.votes.down + 1 } });
  }

  openSubscribeModal(session: StreamSession) {
    this.selectedSession.set(session);
    this.modalOpen.set(true);
  }

  closeModal() {
    this.modalOpen.set(false);
  }

  confirmSubscribe() {
    const session = this.selectedSession();
    if (session) alert(`Subscribed to session: ${session.title}`);
    this.closeModal();
  }

  // [CL-7.4] Performance: stable identity for session rows so Angular only patches
  // rows that actually changed rather than re-rendering the full sessions list.
  trackBySessionId(_index: number, session: StreamSession): string {
    return session.id;
  }
}
