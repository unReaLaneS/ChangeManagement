import { Component, OnInit } from '@angular/core';

import { TicketsService } from './services/tickets.service'
import { Ticket } from './ticket';
import { UsersService } from './services/users.service'
import { User } from './user'

@Component({ selector: 'my-list-ticket', templateUrl: '/tickets/TicketIndexComponent' })

export class TicketIndexComponent implements OnInit {
    tickets: Ticket[];
    public errorMessage: string;
    public constructor(private _ticketsService: TicketsService, private _userService: UsersService) { _userService.loggedUser.subscribe(user => this.user = user) }

    user: User = new User();
    
    ngOnInit(): void {
        this.user = this._userService.exposedUser;
        this._ticketsService.getAllTicketsFiltered(this.user).subscribe(
            resp => this.tickets = resp,
            error => this.errorMessage = <any>error);
        
    }
}