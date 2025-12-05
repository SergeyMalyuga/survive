import { Routes } from '@angular/router';
import { AppRoutes } from './core/constants/const';

export const routes: Routes = [
  {
    path: AppRoutes.MAIN,
    title: 'Survive at all costs',
    loadComponent: () =>
      import('./pages/main/main.component').then((m) => m.MainComponent),
  },
];
