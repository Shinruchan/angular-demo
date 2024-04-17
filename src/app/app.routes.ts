import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async () =>
      (await import('./views/home.component')).HomeComponent,
  },
  {
    path: 'list',
    loadComponent: async () =>
      (await import('./views/list.component')).ListComponent,
  },
];
