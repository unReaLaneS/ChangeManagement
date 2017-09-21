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
var ticket_1 = require("./ticket");
var TicketCreateComponent = (function () {
    function TicketCreateComponent(_ticketsService) {
        this._ticketsService = _ticketsService;
        this.ticket = new ticket_1.Ticket();
    }
    TicketCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._ticketsService.getTypes()
            .subscribe(function (res) { return _this.types = res; }, function (error) { return _this.errorMessage = error; });
    };
    TicketCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this._ticketsService.createTicket(this.ticket).subscribe(function (response) { return _this.resp = response; }, function (error) { return _this.errorMessage = error; });
    };
    ;
    return TicketCreateComponent;
}());
TicketCreateComponent = __decorate([
    core_1.Component({ selector: 'my-change-ticket', templateUrl: '/tickets/TicketCreateComponent' }),
    __metadata("design:paramtypes", [tickets_service_1.TicketsService])
], TicketCreateComponent);
exports.TicketCreateComponent = TicketCreateComponent;
//# sourceMappingURL=ticket.create.component.js.map