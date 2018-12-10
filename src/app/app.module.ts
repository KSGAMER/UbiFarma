import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { MedicinesComponent } from './dashboard/medicines/medicines.component';
import { MedicinesListComponent } from './dashboard/medicines/medicines-list/medicines-list.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './home/menu/menu.component';
import { LoadingComponent } from './loading/loading.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './dashboard/inicio/inicio.component';
import { StadisticsComponent } from './dashboard/stadistics/stadistics.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ChatComponent } from './dashboard/chat/chat.component';
import { CircleComponent } from './dashboard/stadistics/circle/circle.component';
import { LinesComponent } from './dashboard/stadistics/lines/lines.component';
import { WallsComponent } from './dashboard/stadistics/walls/walls.component';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

//Service
import { FirebaseService } from './dashboard/services/firebase.service';
import { PharmacyListComponent } from './dashboard/medicines/pharmacy-list/pharmacy-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    MedicinesComponent,
    MedicinesListComponent,
    HomeComponent,
    MenuComponent,
    LoadingComponent,
    InicioComponent,
    StadisticsComponent,
    ProfileComponent,
    ChatComponent,
    CircleComponent,
    LinesComponent,
    WallsComponent,
    PharmacyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
