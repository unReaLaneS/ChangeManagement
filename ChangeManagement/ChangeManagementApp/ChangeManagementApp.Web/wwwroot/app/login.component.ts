import { Component, Output, EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router'
import { UsersService } from './services/users.service'
import { User } from './user';
import { Observable } from 'rxjs/Observable';

declare var $: any;

@Component({
    selector: 'my-login',
    templateUrl: '/account/loginComponent'
})
export class LoginComponent {
    public constructor(private _usersService: UsersService, private router:Router) { }

    user: User = new User();


    validUser: User = new User();
    errorMessage: any;

    onSubmit() {
        this._usersService.login(this.user).subscribe(response => {
            this.validUser = response;
            if (this.validUser.role !== "Invalid") {
                $(document).ready(() => {
                    this.validUser.isLogged = true;
                    this._usersService.setLoggedUser(this.validUser);
                    //demo.initChartist();
                    $.notify({
                        icon: 'pe-7s-like2',
                        message: "Welcome " + this.validUser.username
                    }, {
                            type: 'success',
                            delay: 1000,
                            allow_dismiss: false
                        });
                });

                this.router.navigate(['/home']);
            }
            else {
                $(document).ready(() => {
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
        },
            error => this.errorMessage = <any>error);
    }
}

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