import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { MedicinesComponent } from './dashboard/medicines/medicines.component';
import { MedicinesDetailComponent } from './dashboard/medicines/medicines-detail/medicines-detail.component';
import { MedicinesListComponent } from './dashboard/medicines/medicines-list/medicines-list.component';
import { MedicinesTemsComponent } from './dashboard/medicines/medicines-list/medicines-tems/medicines-tems.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './home/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    MedicinesComponent,
    MedicinesDetailComponent,
    MedicinesListComponent,
    MedicinesTemsComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
