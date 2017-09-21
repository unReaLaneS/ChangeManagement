import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

import {Role} from './../role'
import { User } from './../user';

@Injectable()
export class UsersService {
    private loginUrl: string = 'api/users/login';
    private registerUrl: string = 'api/users'

    _user = new Subject<User>();

    exposedUser: User = new User();

    loggedUser = this._user.asObservable();

    constructor(private http: Http) { }

    setLoggedUser(user: User) {
        this._user.next(user); this.exposedUser = user;
    }

    login(user: User): Observable<User> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, method: "post" });
        return this.http.post(this.loginUrl, JSON.stringify(user), options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getUserRoles(): Observable<Role[]> {
        return this.http.get("api/users/roles")
            .map(this.extractData)
            .catch(this.handleError);
    }

    registerNewUser(user: User) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, method: "post" });
        return this.http.post(this.registerUrl, JSON.stringify(user), options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getUserByUsername(username: string): Observable<User> {
        return this.http.get("api/users/" + username)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        return res.json();
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}