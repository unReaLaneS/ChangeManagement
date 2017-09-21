import { Component } from '@angular/core';
import { UsersService } from './services/users.service'
import { User } from './user';
import { Role } from './role'
import { Router } from '@angular/router'

declare var $: any;
@Component({ selector: 'my-register', templateUrl: '/account/RegisterComponent' })
export class RegisterComponent {
    roles: Role[];
    errorMessage: any;
    user: User = new User();
    resp: any;

    public constructor(private _usersService: UsersService, private router:Router) {
    }

    ngOnInit(): void {
        this._usersService.getUserRoles()
            .subscribe(roles => this.roles = roles,
            error => this.errorMessage = <any>error);
    }

    onSubmit() {
        this._usersService.registerNewUser(this.user).subscribe(response => this.resp = response,
            error => this.errorMessage = <any>error);
        $(document).ready(() => {
            //demo.initChartist();
            $.notify({
                icon: 'pe-7s-like2',
                message: "New user successfully registered!"
            }, {
                    type: 'success',
                    delay: 1000,
                    allow_dismiss: false
                });
            this.router.navigate(['/home']);
        });
    }
};