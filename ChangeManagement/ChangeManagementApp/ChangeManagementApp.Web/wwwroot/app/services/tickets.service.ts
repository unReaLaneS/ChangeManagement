import { Injectable } from '@angular/core'
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../user';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

import { Ticket } from './../ticket';

@Injectable()
export class TicketsService {
    private url: string = 'api/tickets';

    constructor(private http: Http) { }
    createTicket(ticket: Ticket): Observable<Ticket> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, method: "post" });
        return this.http.post(this.url, JSON.stringify(ticket), options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getAllTickets(): Observable<Ticket[]> {
        return this.http.get("api/tickets")
            .map(this.extractData)
            .catch(this.handleError);
    }

    getAllTicketsFiltered(user:User): Observable<Ticket[]> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, method: "post" });
        return this.http.post(this.url+"/byrole", JSON.stringify(user), options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getChangeTickets(): Observable<Ticket[]> {
        return this.http.get("api/tickets/change")
            .map(this.extractData)
            .catch(this.handleError);
    }

    getIncidentTickets(): Observable<Ticket[]> {
        return this.http.get("api/tickets/incident")
            .map(this.extractData)
            .catch(this.handleError);
    }

    getStatuses(): Observable<string[]> {
        return this.http.get("api/tickets/statuses")
            .map(this.extractData)
            .catch(this.handleError);
    }

    getTypes(): Observable<string[]> {
        return this.http.get("api/tickets/types")
            .map(this.extractData)
            .catch(this.handleError);
    }

    getPriorities(): Observable<string[]> {
        return this.http.get("api/tickets/priorities")
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        console.log(res);
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

    updateTicket(ticket: Ticket) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, method: "put" });

        console.log("UPDATE TICKET:" + ticket.name + ticket.location + ticket.id);

        return this.http.put("api/tickets/" + ticket.id, JSON.stringify(ticket), options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getTicket(id: number) {
        return this.http.get("api/tickets/" + id).map(this.extractData)
            .catch(this.handleError);

    }
}