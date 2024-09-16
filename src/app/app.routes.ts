import { Routes } from "@angular/router";


export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./auth/login/login.component').then((c) => c.LoginComponent)
    },
    {
        path: 'my-plan',
        loadComponent: () => import('./pages/my-plan/my-plan.component').then((c) => c.MyPlanComponent),
        children: [
            {
                path: 'contribution',
                loadComponent: () => import('./pages/contribution/contribution.component').then(c => c.ContributionComponent)
            },
            {
                path: 'next',
                loadComponent: () => import('./pages/next/next.component').then(c => c.NextComponent)
            }
        ]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
]