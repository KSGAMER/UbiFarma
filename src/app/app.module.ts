import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

// Animaciones
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule} from 'ngx-toastr';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/dashboard/header/header.component';
import { MedicinesComponent } from './components/dashboard/medicines/medicines.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ChatComponent } from './components/dashboard/chat/chat.component';
import { StadisticsComponent } from './components/dashboard/stadistics/stadistics.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { LocalListComponent } from './components/dashboard/medicines/local-list/local-list.component';
import { LocalComponent } from './components/dashboard/medicines/local/local.component';
import { MedicineComponent } from './components/dashboard/medicines/medicine/medicine.component';
import { MedicineListComponent } from './components/dashboard/medicines/medicine-list/medicine-list.component';

// Firebase
import { AngularFireModule }  from 'angularfire2';
import { environment }  from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Service
import { MedicineService } from './services/medicine.service';
import { AuthorizationService } from './services/authorization.service';
import { LocalService } from './services/local.service';
import { CircleComponent } from './components/dashboard/stadistics/circle/circle.component';
import { WallsComponent } from './components/dashboard/stadistics/walls/walls.component';
import { LinesComponent } from './components/dashboard/stadistics/lines/lines.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    MedicinesComponent,
    LoadingComponent,
    ChatComponent,
    StadisticsComponent,
    ProfileComponent,
    LocalListComponent,
    LocalComponent,
    MedicineComponent,
    MedicineListComponent,
    CircleComponent,
    WallsComponent,
    LinesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    AuthorizationService,
    MedicineService,
    LocalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
