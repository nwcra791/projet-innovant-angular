"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
var home_component_1 = require('./home/home.component');
var ng2_semantic_ui_1 = require('ng2-semantic-ui');
var router_1 = require('@angular/router');
var menu_computer_component_1 = require('./menu-computer/menu-computer.component');
var menu_tab_mobile_component_1 = require('./menu-tab-mobile/menu-tab-mobile.component');
var huge_header_layout_component_1 = require('./huge-header-layout/huge-header-layout.component');
var login_component_1 = require('./login/login.component');
var enter_layout_component_1 = require('./enter-layout/enter-layout.component');
var page_not_found_component_1 = require('./page-not-found/page-not-found.component');
var register_component_1 = require('./register/register.component');
var manager_layout_component_1 = require('./manager-layout/manager-layout.component');
var hoster_component_1 = require('./hoster/hoster.component');
var traveller_component_1 = require('./traveller/traveller.component');
var toolbar_component_1 = require('./toolbar/toolbar.component');
var search_ui_component_1 = require('./search-ui/search-ui.component');

var appRoutes = [
    { path: '', redirectTo: 'start', pathMatch: 'full' },
    { path: 'start', component: huge_header_layout_component_1.HugeHeaderLayoutComponent, children: [
            { path: '', component: home_component_1.HomeComponent },
            { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
        ] },
    { path: 'enter', component: enter_layout_component_1.EnterLayoutComponent, children: [
            { path: 'l', component: login_component_1.LoginComponent },
            { path: 'r', component: register_component_1.RegisterComponent },
            { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
        ] },
    { path: 'manager', component: manager_layout_component_1.ManagerLayoutComponent, children: [
            { path: 'hoster', component: hoster_component_1.HosterComponent },
            { path: 'traveller', component: traveller_component_1.TravellerComponent },
            { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
        ] },
    { path: '**', redirectTo: 'enter/not-found', pathMatch: 'full' },
];

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                menu_computer_component_1.MenuComputerComponent,
                menu_tab_mobile_component_1.MenuTabMobileComponent,
                huge_header_layout_component_1.HugeHeaderLayoutComponent,
                login_component_1.LoginComponent,
                enter_layout_component_1.EnterLayoutComponent,
                page_not_found_component_1.PageNotFoundComponent,
                register_component_1.RegisterComponent,
                manager_layout_component_1.ManagerLayoutComponent,
                hoster_component_1.HosterComponent,
                traveller_component_1.TravellerComponent,
                toolbar_component_1.ToolbarComponent,
                search_ui_component_1
            ],
            imports: [
                router_1.RouterModule.forRoot(appRoutes),
                platform_browser_1.BrowserModule,
                ng2_semantic_ui_1.SuiModule,
                router_1.RouterModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
