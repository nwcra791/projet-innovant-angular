import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {SuiModule} from 'ng2-semantic-ui';

import { RouterModule, Routes } from '@angular/router';
import { MenuComputerComponent } from './menu-computer/menu-computer.component';
import { MenuTabMobileComponent } from './menu-tab-mobile/menu-tab-mobile.component';
import { HugeHeaderLayoutComponent } from './huge-header-layout/huge-header-layout.component';
import { LoginComponent } from './login/login.component';
import { EnterLayoutComponent } from './enter-layout/enter-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { ManagerLayoutComponent } from './manager-layout/manager-layout.component';
import { HosterComponent } from './hoster/hoster.component';
import { TravellerComponent } from './traveller/traveller.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { LoggingService } from "./services/logging.service";
import { HttpService } from "./services/http.service";
import { HttpModule } from "@angular/http"
import {HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { UploadService } from './uploads/shared/upload.service';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component'
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase} from "angularfire2/database";

export const firebaseConfig = environment.firebase;

const appRoutes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full'},
  { path: 'start', component: HugeHeaderLayoutComponent, children: [
    { path: '', component: HomeComponent },
    { path: '**', component: PageNotFoundComponent }
  ]},
  { path: 'enter', component: EnterLayoutComponent, children: [
    { path: 'l', component: LoginComponent },
    { path: 'r', component: RegisterComponent },
    { path: '**', component: PageNotFoundComponent }
  ]},
  { path: 'manager', component: ManagerLayoutComponent, children: [
    { path: 'hoster', component: HosterComponent },
    { path: 'traveller', component: TravellerComponent },
    { path: '**', component: PageNotFoundComponent }
  ]},
  { path: '**', redirectTo: 'enter/not-found', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComputerComponent,
    MenuTabMobileComponent,
    HugeHeaderLayoutComponent,
    LoginComponent,
    EnterLayoutComponent,
    PageNotFoundComponent,
    RegisterComponent,
    ManagerLayoutComponent,
    HosterComponent,
    TravellerComponent,
    ToolbarComponent,
    UploadFormComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    SuiModule,
    RouterModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
      HttpService,
      LoggingService,
      UploadService,
      AngularFireAuth,
      AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
