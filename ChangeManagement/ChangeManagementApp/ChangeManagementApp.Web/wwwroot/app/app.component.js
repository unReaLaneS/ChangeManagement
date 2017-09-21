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
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var users_service_1 = require("./services/users.service");
var tickets_service_1 = require("./services/tickets.service");
var user_1 = require("./user");
var AppComponent = (function () {
    function AppComponent(titleService, _userService, _router) {
        var _this = this;
        this.titleService = titleService;
        this._userService = _userService;
        this._router = _router;
        this._user = new user_1.User();
        _userService.loggedUser.subscribe(function (user) { _this._user = user; _this._userIsLogged = user.isLogged; });
    }
    AppComponent.prototype.ngOnInit = function () {
        if (!this._userIsLogged) {
            this._router.navigate(['/login']);
        }
    };
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    AppComponent.prototype.logOut = function () {
        $(document).ready(function () {
            $.notify({
                icon: 'pe-7s-info',
                message: "You logged out successfully."
            }, {
                type: 'success',
                delay: 1000,
                allow_dismiss: false
            });
            setTimeout(function () { location.reload(); }, 2500);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: '/home/appComponent',
        providers: [users_service_1.UsersService, tickets_service_1.TicketsService]
    }),
    __metadata("design:paramtypes", [platform_browser_1.Title, users_service_1.UsersService, router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map