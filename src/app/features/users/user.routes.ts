import { Routes } from '@angular/router';

export const userRoutes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/users-page/users-page').then(m => m.UsersPage)
    },
];