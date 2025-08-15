import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () =>
            import('./features/auth/auth.routes').then(m => m.authRoutes)
    },
    {
        path: 'users',
        loadChildren: () =>
            import('./features/users/user.routes').then(m => m.userRoutes)
    },
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    }
];
