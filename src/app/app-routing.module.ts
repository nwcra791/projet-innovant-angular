import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComputerComponent } from './menu-computer/menu-computer.component';
import { MenuTabMobileComponent } from './menu-tab-mobile/menu-tab-mobile.component';
import { HugeHeaderLayoutComponent } from './huge-header-layout/huge-header-layout.component';
import { LoginComponent } from './login/login.component';
import { EnterLayoutComponent } from './enter-layout/enter-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { ManagerLayoutComponent } from './manager-layout/manager-layout.component';
import { HosterComponent } from './hoster/hoster.component';
// import { TravellerComponent } from './traveller/traveller.component';
import { TravellerTripComponent } from './traveller/traveller-trip/traveller-trip.component';
import { TravellerOfferComponent } from './traveller/traveller-offer/traveller-offer.component';
import { TravellerComponent } from './traveller/traveller.component';


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
    { path: 'host', component: HosterComponent },
    { path: 'traveller', /*component: TravellerComponent,*/ children:  [
      { path: 'dashboard', component: TravellerComponent },
      { path: 'trip', component: TravellerTripComponent },
      { path: 'trip/:id', component: TravellerTripComponent },
      { path: 'offer', component: TravellerOfferComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: '**', component: PageNotFoundComponent }
    ]},
    { path: '**', component: PageNotFoundComponent }
  ]},
  { path: '**', redirectTo: 'enter/not-found', pathMatch: 'full'},
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
