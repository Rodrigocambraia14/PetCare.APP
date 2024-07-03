import { Routes } from '@angular/router';
import { VaccineCalendarComponent } from './pages/vaccine-calendar/vaccine-calendar.component';
import { RoutinesComponent } from './pages/routines/routines.component';
import { RemindersComponent } from './pages/reminders/reminders.component';
import { MyPetsComponent } from './pages/my-pets/my-pets.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    { path: 'meus-pets', component: MyPetsComponent },
  { path: 'lembretes', component: RemindersComponent },
  { path: 'calendario-de-vacinas', component: VaccineCalendarComponent },
  { path: 'rotinas', component: RoutinesComponent },
  { path: 'home', component: HomeComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'register', component: RegisterComponent }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' } 
];
