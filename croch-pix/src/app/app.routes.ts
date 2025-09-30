import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NewPatternComponent } from './new-pattern/new-pattern.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'new', component: NewPatternComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
