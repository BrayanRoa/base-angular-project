import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () =>
            import('./features/auth/auth.routes').then(m => m.authRoutes)
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('./features/shell/shell.routes').then(m => m.shellRoutes)
    },
    {
        path: 'analytics', // queda aqui por ahora
        loadChildren: () =>
            import('./features/analytics/analytics.routes').then(m => m.analyticsRoutes)
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
