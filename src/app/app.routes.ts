import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./home/home.component')
    },
    {
        path: 'converted-number',
        loadComponent: () => import('./converted-finvalue/converted-finvalue.component')
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
