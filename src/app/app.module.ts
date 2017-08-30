import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SuiModule} from 'ng2-semantic-ui';
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
import { TravellerTripComponent } from './traveller/traveller-trip/traveller-trip.component';
import { TravellerOfferComponent } from './traveller/traveller-offer/traveller-offer.component';
import { SearchUiComponent } from './search-ui/search-ui.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoggingService } from "./services/logging.service";
import { HttpService } from "./services/http.service";
import { HttpModule } from "@angular/http"
import "materialize-css"
import * as $ from "jquery";
import { MaterializeModule } from "angular2-materialize";
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { UploadService } from './uploads/shared/upload.service';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component'
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase} from "angularfire2/database";

export const firebaseConfig = environment.firebase;



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
    TravellerTripComponent,
    TravellerOfferComponent,
    ToolbarComponent,
    UploadFormComponent,
    SearchUiComponent,
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    SuiModule,
    RouterModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDuje1pzXQ1EirN5z7LCMCmbqUXmjO4kv8'
    }),
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
