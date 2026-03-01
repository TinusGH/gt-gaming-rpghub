import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GameService, GameDetailData, StreamSession } from './game.service';

@Component({
  selector: 'app-game-detail',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './game-detail.html',
  styleUrls: ['./game-detail.css'],
})
export class GameDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private gameService = inject(GameService);

  game = signal<GameDetailData | null>(null);

  // Modal state
  modalOpen = signal(false);
  selectedSession = signal<StreamSession | null>(null);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.game.set(this.gameService.getGameById(id));
    }
  }

  upvote() {
    const g = this.game();
    if (g) {
      g.votes.up += 1;
      this.game.set({ ...g });
    }
  }

  downvote() {
    const g = this.game();
    if (g) {
      g.votes.down += 1;
      this.game.set({ ...g });
    }
  }

  // Modal methods
  openSubscribeModal(session: StreamSession) {
    this.selectedSession.set(session);
    this.modalOpen.set(true);
  }

  closeModal() {
    this.modalOpen.set(false);
  }

  confirmSubscribe() {
    const session = this.selectedSession();
    if (session) {
      alert(`Subscribed to session: ${session.title}`);
    }
    this.closeModal();
  }
}
