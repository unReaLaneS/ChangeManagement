import { Component, OnInit } from '@angular/core';

import { TicketsService } from './services/tickets.service'
import { Ticket } from './ticket';

@Component({ selector: 'my-list-change-ticket', templateUrl: '/tickets/IncidentTicketListComponent' })

export class IncidentTicketListComponent implements OnInit {
    tickets: Ticket[];
    public errorMessage: string;
    public constructor(private _ticketsService: TicketsService) { }

    ngOnInit(): void {
        this._ticketsService.getIncidentTickets().subscribe(
            resp => this.tickets = resp,
            error => this.errorMessage = <any>error);
    }
}