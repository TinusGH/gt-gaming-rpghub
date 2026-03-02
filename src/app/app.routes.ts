import { provideRouter, Routes } from '@angular/router';
import { Layout } from './core/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home').then(m => m.Home),
        data: { animation: 'HomePage' }
      },
      {
        path: 'game/:id',
        loadComponent: () => import('./features/game-detail/game-detail').then(m => m.GameDetail),
        data: { animation: 'GameDetailPage' }
      },
      {
        path: 'about',
        loadComponent: () => import('./features/about/about').then(m => m.About),
        data: { animation: 'AboutPage' }
      }
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then(m => m.NotFound)
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
