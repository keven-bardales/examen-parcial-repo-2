import { Routes } from '@angular/router';
import { HomePage } from './home.page';

export const HomeRoutes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'primer-caso',
        loadChildren: () =>
          import('./tabs/primer-caso/primer-caso.component').then(
            (m) => m.PrimerCasoComponent
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'tabs/primer-caso',
    pathMatch: 'full',
  },
];
