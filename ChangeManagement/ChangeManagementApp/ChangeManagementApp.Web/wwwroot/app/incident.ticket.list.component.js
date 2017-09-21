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
var tickets_service_1 = require("./services/tickets.service");
var IncidentTicketListComponent = (function () {
    function IncidentTicketListComponent(_ticketsService) {
        this._ticketsService = _ticketsService;
    }
    IncidentTicketListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._ticketsService.getIncidentTickets().subscribe(function (resp) { return _this.tickets = resp; }, function (error) { return _this.errorMessage = error; });
    };
    return IncidentTicketListComponent;
}());
IncidentTicketListComponent = __decorate([
    core_1.Component({ selector: 'my-list-change-ticket', templateUrl: '/tickets/IncidentTicketListComponent' }),
    __metadata("design:paramtypes", [tickets_service_1.TicketsService])
], IncidentTicketListComponent);
exports.IncidentTicketListComponent = IncidentTicketListComponent;
//# sourceMappingURL=incident.ticket.list.component.js.map