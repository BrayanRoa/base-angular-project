import { Routes } from "@angular/router";
import { ShellPage } from "./pages/shell-page";

export const shellRoutes: Routes = [
    {
        path: '',
        component: ShellPage,
        children: [
            {
                path: 'imports',
                loadChildren: () =>
                    import('../imports/imports.routes').then(m => m.importsRoutes)
            },
            {
                path: 'operations',
                loadChildren: () =>
                    import('../operations/operations.routes').then(m => m.operationsRoutes)
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'operations'
            },
            {
                path: '**',
                redirectTo: 'operations'
            }
        ]
    },

]