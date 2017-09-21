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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var user_1 = require("./../user");
var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
        this.loginUrl = 'api/users/login';
        this.registerUrl = 'api/users';
        this._user = new Subject_1.Subject();
        this.exposedUser = new user_1.User();
        this.loggedUser = this._user.asObservable();
    }
    UsersService.prototype.setLoggedUser = function (user) {
        this._user.next(user);
        this.exposedUser = user;
    };
    UsersService.prototype.login = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, method: "post" });
        return this.http.post(this.loginUrl, JSON.stringify(user), options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UsersService.prototype.getUserRoles = function () {
        return this.http.get("api/users/roles")
            .map(this.extractData)
            .catch(this.handleError);
    };
    UsersService.prototype.registerNewUser = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, method: "post" });
        return this.http.post(this.registerUrl, JSON.stringify(user), options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UsersService.prototype.getUserByUsername = function (username) {
        return this.http.get("api/users/" + username)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UsersService.prototype.extractData = function (res) {
        return res.json();
    };
    UsersService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return UsersService;
}());
UsersService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map