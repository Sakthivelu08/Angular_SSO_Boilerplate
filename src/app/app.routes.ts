import { Routes } from "@angular/router";
import { MsalGuard } from "@azure/msal-angular";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./auth/login/login.component").then(m => m.LoginComponent)
  },
  {
    path: "login",
    loadComponent: () =>
      import("./auth/login/login.component").then(m => m.LoginComponent)
  },
  {
    path: "home",
    loadComponent: () =>
      import("./pages/home/home.component").then(m => m.HomeComponent),
    canActivate: [MsalGuard]
  },
  { path: "**", redirectTo: "" }
];