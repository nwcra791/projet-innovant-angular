"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var logging_service_1 = require("../../services/logging.service");
var http_service_1 = require("../../services/http.service");
var CardComponent = (function () {
    function CardComponent(loggingService, httpService) {
        this.loggingService = loggingService;
        this.httpService = httpService;
        this.payload = {
            email: "quentin@mail.com",
            password: "test123"
        };
        this.loggingStatut = this.loggingService.isLogin();
        httpService.post("/connection", JSON.stringify(this.payload)).subscribe(function (data) {
            console.log(data);
        });
    }
    return CardComponent;
}());
CardComponent = __decorate([
    core_1.Component({
        selector: 'card',
        templateUrl: './card.template.html',
        styleUrls: [
            "../../../assets/dist/semantic.min.css"
        ],
    }),
    __metadata("design:paramtypes", [logging_service_1.LoggingService,
        http_service_1.HttpService])
], CardComponent);
exports.CardComponent = CardComponent;
//# sourceMappingURL=card.component.js.map