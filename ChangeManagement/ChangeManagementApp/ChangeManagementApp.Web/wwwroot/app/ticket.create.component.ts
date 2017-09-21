import { Component, OnInit } from '@angular/core';

import { TicketsService } from './services/tickets.service'
import { Ticket } from './ticket'

@Component({ selector: 'my-change-ticket', templateUrl: '/tickets/TicketCreateComponent' })

export class TicketCreateComponent implements OnInit {
    public constructor(private _ticketsService: TicketsService) { }

    ticket: Ticket = new Ticket();
    types: string[];
    resp: any;
    errorMessage: any;

    ngOnInit(): void {
        this._ticketsService.getTypes()
            .subscribe(res => this.types = res,
            error => this.errorMessage = <any>error);
    }
    onSubmit() {
        this._ticketsService.createTicket(this.ticket).subscribe(response => this.resp = response,
            error => this.errorMessage = <any>error);
    };
}