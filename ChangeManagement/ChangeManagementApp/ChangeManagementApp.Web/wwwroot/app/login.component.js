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
var router_1 = require("@angular/router");
var users_service_1 = require("./services/users.service");
var user_1 = require("./user");
var LoginComponent = (function () {
    function LoginComponent(_usersService, router) {
        this._usersService = _usersService;
        this.router = router;
        this.user = new user_1.User();
        this.validUser = new user_1.User();
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this._usersService.login(this.user).subscribe(function (response) {
            _this.validUser = response;
            if (_this.validUser.role !== "Invalid") {
                $(document).ready(function () {
                    _this.validUser.isLogged = true;
                    _this._usersService.setLoggedUser(_this.validUser);
                    //demo.initChartist();
                    $.notify({
                        icon: 'pe-7s-like2',
                        message: "Welcome " + _this.validUser.username
                    }, {
                        type: 'success',
                        delay: 1000,
                        allow_dismiss: false
                    });
                });
                _this.router.navigate(['/home']);
            }
            else {
                $(document).ready(function () {
                    //demo.initChartist();
                    $.notify({
                        icon: 'pe-7s-attention',
                        message: "Invalid username or password "
                    }, {
                        type: 'danger',
                        delay: 1000,
                        allow_dismiss: false
                    });
                });
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'my-login',
        templateUrl: '/account/loginComponent'
    }),
    __metadata("design:paramtypes", [users_service_1.UsersService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//TODO: Remove this code when app is ready for deployment
//private extractData(res: Response) {
//    let body = res.json();
//    return body.data || {};
//}
//private handleError(error: Response | any) {
//    // In a real world app, you might use a remote logging infrastructure
//    let errMsg: string;
//    if (error instanceof Response) {
//        const body = error.json() || '';
//        const err = body.error || JSON.stringify(body);
//        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
//    } else {
//        errMsg = error.message ? error.message : error.toString();
//    }
//    console.error(errMsg);
//    return Observable.throw(errMsg);
//}
//export class LoginComponent {
//    public constructor(private http: Http) { }
//    private url: string = "api/users/get";
//    user: User = new User();
//    onSubmit() {
//        //let headers = new Headers({ 'Content-Type': 'application/json' });
//        //let options = new RequestOptions({ headers: headers, method: "post" });
//        //return this.http.post(this.url, JSON.stringify(this.user), options)
//        //    .map((res: Response) => res.json())
//        //    .catch(this.handleError);
//        return this.http.get(this.url)
//            .map(this.extractData)
//            .catch(this.handleError);
//    }
//    values: any[];
//    errorMessage: any;
//    getValues() {
//        this.getResults().subscribe(
//            value => this.values = value,
//            error => this.errorMessage = <any>error);
//    }
//    getResults(): Observable<string[]> {
//        return  this.http.get(this.url)
//            .map((res: Response) => res.json())
//            .catch(err => Observable.throw(err.json()));
//    } 
//# sourceMappingURL=login.component.js.map