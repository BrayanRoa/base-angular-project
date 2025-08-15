import { Routes } from '@angular/router';

export const authRoutes: Routes = [
    {
        path: "login",
        loadComponent: () =>
            import('./pages/auth-login-page/auth-login-page').then(l => l.AuthLoginPage)
    },
    {
        path: "register",
        loadComponent: () =>
            import('./pages/auth-register-page/auth-register-page').then(r => r.AuthRegisterPage)
    }
];