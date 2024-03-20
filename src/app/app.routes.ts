import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { PrimerCasoComponent } from './home/tabs/primer-caso/primer-caso.component';
import { SegundoCasoComponent } from './home/tabs/segundo-caso/segundo-caso.component';
import { TercerCasoComponent } from './home/tabs/tercer-caso/tercer-caso.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        redirectTo: 'primer-caso',
        pathMatch: 'full',
      },
      {
        path: 'primer-caso',
        component: PrimerCasoComponent,
      },
      {
        path: 'segundo-caso',
        component: SegundoCasoComponent,
      },
      {
        path: 'tercer-caso',
        component: TercerCasoComponent,
      },
    ],
  },
];
