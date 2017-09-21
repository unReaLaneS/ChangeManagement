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
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var TicketsService = (function () {
    function TicketsService(http) {
        this.http = http;
        this.url = 'api/tickets';
    }
    TicketsService.prototype.createTicket = function (ticket) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, method: "post" });
        return this.http.post(this.url, JSON.stringify(ticket), options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    TicketsService.prototype.getAllTickets = function () {
        return this.http.get("api/tickets")
            .map(this.extractData)
            .catch(this.handleError);
    };
    TicketsService.prototype.getAllTicketsFiltered = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, method: "post" });
        return this.http.post(this.url + "/byrole", JSON.stringify(user), options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    TicketsService.prototype.getChangeTickets = function () {
        return this.http.get("api/tickets/change")
            .map(this.extractData)
            .catch(this.handleError);
    };
    TicketsService.prototype.getIncidentTickets = function () {
        return this.http.get("api/tickets/incident")
            .map(this.extractData)
            .catch(this.handleError);
    };
    TicketsService.prototype.getStatuses = function () {
        return this.http.get("api/tickets/statuses")
            .map(this.extractData)
            .catch(this.handleError);
    };
    TicketsService.prototype.getTypes = function () {
        return this.http.get("api/tickets/types")
            .map(this.extractData)
            .catch(this.handleError);
    };
    TicketsService.prototype.getPriorities = function () {
        return this.http.get("api/tickets/priorities")
            .map(this.extractData)
            .catch(this.handleError);
    };
    TicketsService.prototype.extractData = function (res) {
        console.log(res);
        return res.json();
    };
    TicketsService.prototype.handleError = function (error) {
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
    TicketsService.prototype.updateTicket = function (ticket) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, method: "put" });
        console.log("UPDATE TICKET:" + ticket.name + ticket.location + ticket.id);
        return this.http.put("api/tickets/" + ticket.id, JSON.stringify(ticket), options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    TicketsService.prototype.getTicket = function (id) {
        return this.http.get("api/tickets/" + id).map(this.extractData)
            .catch(this.handleError);
    };
    return TicketsService;
}());
TicketsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TicketsService);
exports.TicketsService = TicketsService;
//# sourceMappingURL=tickets.service.js.map