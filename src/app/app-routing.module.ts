import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MedicinesComponent } from './components/dashboard/medicines/medicines.component';
import { ChatComponent } from './components/dashboard/chat/chat.component';
import { StadisticsComponent } from './components/dashboard/stadistics/stadistics.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { AuthorizationGuard } from './services/authorization.guard';

const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'load', component: LoadingComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'dashboard', component: DashboardComponent, canActivate: [AuthorizationGuard],
        children: [
            {path: '', component: MedicinesComponent},
            {path: 'medicines', component: MedicinesComponent},
            {path: 'chat', component: ChatComponent},
            {path: 'stadistcis', component: StadisticsComponent},
            {path: 'profile', component: ProfileComponent}
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}