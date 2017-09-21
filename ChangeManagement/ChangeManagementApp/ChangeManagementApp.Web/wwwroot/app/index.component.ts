import { Component } from '@angular/core';
import { UsersService } from './services/users.service'
import { User } from './user'

@Component({
    selector: 'my-index',
    templateUrl: '/home/indexComponent'
})

export class IndexComponent {
    _user: User = new User();

    public constructor(private _usersService: UsersService) {
        _usersService.loggedUser.subscribe(user => this._user = user);
    }
};