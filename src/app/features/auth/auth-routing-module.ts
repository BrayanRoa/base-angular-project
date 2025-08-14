import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
