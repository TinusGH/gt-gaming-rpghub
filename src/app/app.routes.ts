import { provideRouter, Routes } from '@angular/router';
import { Layout } from './core/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        // [CL-11.1] SEO: title property sets the browser tab title via Angular's default TitleStrategy
        title: 'Game Library | GT_Gaming Hub',
        loadComponent: () => import('./features/home/home').then(m => m.Home),
        data: { animation: 'HomePage' }
      },
      {
        path: 'game/:id',
        // [CL-11.1] SEO: Dynamic game title is set in GameDetail component via Title service
        loadComponent: () => import('./features/game-detail/game-detail').then(m => m.GameDetail),
        data: { animation: 'GameDetailPage' }
      },
      {
        path: 'about',
        // [CL-11.1] SEO: title property sets the browser tab title via Angular's default TitleStrategy
        title: 'About | GT_Gaming Hub',
        loadComponent: () => import('./features/about/about').then(m => m.About),
        data: { animation: 'AboutPage' }
      }
    ]
  },
  {
    path: '**',
    // [CL-11.1] SEO: 404 route gets its own descriptive title
    title: '404 Not Found | GT_Gaming Hub',
    loadComponent: () => import('./features/not-found/not-found').then(m => m.NotFound)
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
