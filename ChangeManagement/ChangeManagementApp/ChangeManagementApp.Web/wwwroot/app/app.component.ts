import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router'
import { UsersService } from './services/users.service';
import { TicketsService } from './services/tickets.service'
import { User } from './user'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
declare var $: any;

@Component({
    selector: 'my-app',
    templateUrl: '/home/appComponent',
    providers: [UsersService, TicketsService]
})

export class AppComponent implements OnInit {
    ngOnInit(): void {
        if (!this._userIsLogged) {
            this._router.navigate(['/login']);
        }
    }

    _user: User = new User();
    _userIsLogged: boolean;
    public constructor(private titleService: Title, private _userService: UsersService, private _router: Router) {
        _userService.loggedUser.subscribe(user => { this._user = user; this._userIsLogged = user.isLogged });
    }

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }

    public logOut() {
        $(document).ready(() => {
            $.notify({
                icon: 'pe-7s-info',
                message: "You logged out successfully."
            }, {
                    type: 'success',
                    delay: 1000,
                    allow_dismiss: false
                });
            setTimeout(() => { location.reload() }, 2500);
        });
    }
}