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
var router_2 = require("@angular/router");
var common_1 = require("@angular/common");
var tickets_service_1 = require("./services/tickets.service");
var users_service_1 = require("./services/users.service");
var ticket_1 = require("./ticket");
require("rxjs/add/operator/switchMap");
var TicketEditComponent = (function () {
    function TicketEditComponent(_ticketsService, _usersService, route, location, router) {
        this._ticketsService = _ticketsService;
        this._usersService = _usersService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.ticket = new ticket_1.Ticket();
    }
    /*username: string;
    assignee: number;*/
    TicketEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this._ticketsService.getTicketById()
        this._ticketsService.getStatuses().subscribe(function (resp) { return _this.statuses = resp; }, function (error) { return _this.errorMessage = error; });
        this._ticketsService.getTypes()
            .subscribe(function (res) { return _this.types = res; }, function (error) { return _this.errorMessage = error; });
        this._ticketsService.getPriorities()
            .subscribe(function (res) { return _this.priorities = res; }, function (error) { return _this.errorMessage = error; });
        this.route.params
            .switchMap(function (params) { return _this._ticketsService.getTicket(+params['id']); })
            .subscribe(function (ticket) { return _this.ticket = ticket; });
        /* this._usersService.getUserByUsername(this.username)
             .subscribe(res => this.assignee = res.id,
             error => this.errorMessage = <any>error);*/
    };
    TicketEditComponent.prototype.onUpdate = function () {
        var _this = this;
        this._ticketsService.updateTicket(this.ticket).subscribe(function (response) { return _this.resp = response; }, function (error) { return _this.errorMessage = error; });
        $(document).ready(function () {
            $.notify({
                icon: 'pe-7s-info',
                message: "All changes successfully saved!"
            }, {
                type: 'success',
                delay: 1000
            });
        });
        this.router.navigate(['/home']);
    };
    ;
    return TicketEditComponent;
}());
TicketEditComponent = __decorate([
    core_1.Component({
        selector: 'my-edit-component',
        templateUrl: '/tickets/ticketEditComponent'
    }),
    __metadata("design:paramtypes", [tickets_service_1.TicketsService, users_service_1.UsersService, router_2.ActivatedRoute, common_1.Location, router_1.Router])
], TicketEditComponent);
exports.TicketEditComponent = TicketEditComponent;
//# sourceMappingURL=ticket.edit.component.js.map