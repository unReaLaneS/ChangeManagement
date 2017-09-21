import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { TicketsService } from './services/tickets.service';
import { UsersService } from './services/users.service';
import { Ticket } from './ticket';
import 'rxjs/add/operator/switchMap';

declare var $: any;

@Component({
    selector: 'my-edit-component',
    templateUrl: '/tickets/ticketEditComponent'
})

export class TicketEditComponent implements OnInit {
    public constructor(private _ticketsService: TicketsService, private _usersService: UsersService, private route: ActivatedRoute, private location: Location, private router:Router) { }
    ticket: Ticket = new Ticket();
    statuses: string[];
    types: string[];
    priorities: string[];
    resp: any;
    errorMessage: any;
    private sub: any;
    /*username: string;
    assignee: number;*/

    ngOnInit(): void {
        // this._ticketsService.getTicketById()
        this._ticketsService.getStatuses().subscribe(
            resp => this.statuses = resp,
            error => this.errorMessage = <any>error);

        this._ticketsService.getTypes()
            .subscribe(res => this.types = res,
            error => this.errorMessage = <any>error);

        this._ticketsService.getPriorities()
            .subscribe(res => this.priorities = res,
            error => this.errorMessage = <any>error);

        this.route.params
            .switchMap((params: Params) => this._ticketsService.getTicket(+params['id']))
            .subscribe(ticket => this.ticket = ticket);

       /* this._usersService.getUserByUsername(this.username)
            .subscribe(res => this.assignee = res.id,
            error => this.errorMessage = <any>error);*/
    }

    onUpdate() {
        this._ticketsService.updateTicket(this.ticket).subscribe(response => this.resp = response,
            error => this.errorMessage = <any>error);

        $(document).ready(() => {
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
}