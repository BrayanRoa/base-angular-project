import { Routes } from "@angular/router";

export const operationsRoutes: Routes = [
    {
        path: "",
        loadComponent: () =>
            import("./pages/operations-page/operations-page").then(p => p.OperationsPage)
    }
]