import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MedicinesComponent } from './dashboard/medicines/medicines.component';
import { InicioComponent } from './dashboard/inicio/inicio.component';
import { StadisticsComponent } from './dashboard/stadistics/stadistics.component';
import { ChatComponent } from './dashboard/chat/chat.component';
import { ProfileComponent } from './dashboard/profile/profile.component';

const routes: Routes = [
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'dashboard', component: DashboardComponent,
        children: [
            {path: '', component: MedicinesComponent},
            {path: 'specialist', component: InicioComponent},
            {path: 'medicines', component: MedicinesComponent},
            {path: 'stadistics', component: StadisticsComponent},
            {path: 'chat', component: ChatComponent},
            {path: 'profile', component: ProfileComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}