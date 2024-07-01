import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './log-in/log-in.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: 'log-in', component: LoginComponent },

    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
