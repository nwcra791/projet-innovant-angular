"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var menu_component_1 = require("./components/menu/menu.component");
var login_register_component_1 = require("./components/login-register/login-register.component");
var home_component_1 = require("./components/home/home.component");
var annonce_component_1 = require("./components/annonce/annonce.component");
var card_component_1 = require("./components/card/card.component");
var logging_service_1 = require("./services/logging.service");
var http_service_1 = require("./services/http.service");
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'annonce', component: annonce_component_1.AnnonceComponent },
    { path: 'card', component: card_component_1.CardComponent },
    { path: 'login-register', component: login_register_component_1.LoginRegisterComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(routes),
            platform_browser_1.BrowserModule,
            router_1.RouterModule,
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            login_register_component_1.LoginRegisterComponent,
            menu_component_1.MenuComponent,
            annonce_component_1.AnnonceComponent,
            card_component_1.CardComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ],
        providers: [
            logging_service_1.LoggingService,
            http_service_1.HttpService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map