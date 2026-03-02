import { Component, inject, signal, computed } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { GameService, Game, StreamType } from '../../core/services/game.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  private router = inject(Router);
  private gameService = inject(GameService);

  private allGames: Game[] = this.gameService.getGames();

  filterType = signal<StreamType | 'all'>('all');
  searchQuery = signal('');

  filteredGames = computed(() => {
    const type = this.filterType();
    const query = this.searchQuery().toLowerCase().trim();

    return this.allGames.filter(game => {
      const matchesType = type === 'all' || game.streamType === type;
      const matchesSearch = !query || game.title.toLowerCase().includes(query);
      return matchesType && matchesSearch;
    });
  });

  setFilter(type: StreamType | 'all') {
    this.filterType.set(type);
  }

  onSearch(event: Event) {
    this.searchQuery.set((event.target as HTMLInputElement).value);
  }

  goToGame(id: string) {
    this.router.navigate(['/game', id]);
  }

  onCoverError(event: Event) {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
