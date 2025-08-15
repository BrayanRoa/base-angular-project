import { Routes } from "@angular/router";

export const importsRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                loadComponent: () =>
                    import('./pages/imports-list-page/imports-list-page').then(p => p.ImportsListPage)
            },
            {
                path: 'create',
                loadComponent: () =>
                    import('./pages/imports-create-page/imports-create-page').then(p => p.ImportsCreatePage)
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list'
            }
        ]
    }
]