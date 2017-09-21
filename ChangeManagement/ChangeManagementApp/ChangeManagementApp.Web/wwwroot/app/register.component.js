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
var users_service_1 = require("./services/users.service");
var user_1 = require("./user");
var router_1 = require("@angular/router");
var RegisterComponent = (function () {
    function RegisterComponent(_usersService, router) {
        this._usersService = _usersService;
        this.router = router;
        this.user = new user_1.User();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._usersService.getUserRoles()
            .subscribe(function (roles) { return _this.roles = roles; }, function (error) { return _this.errorMessage = error; });
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this._usersService.registerNewUser(this.user).subscribe(function (response) { return _this.resp = response; }, function (error) { return _this.errorMessage = error; });
        $(document).ready(function () {
            //demo.initChartist();
            $.notify({
                icon: 'pe-7s-like2',
                message: "New user successfully registered!"
            }, {
                type: 'success',
                delay: 1000,
                allow_dismiss: false
            });
            _this.router.navigate(['/home']);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({ selector: 'my-register', templateUrl: '/account/RegisterComponent' }),
    __metadata("design:paramtypes", [users_service_1.UsersService, router_1.Router])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
;
//# sourceMappingURL=register.component.js.map