import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { IndexComponent } from './index.component';
import { ContactComponent } from './contact.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { TicketCreateComponent } from './ticket.create.component';
import { TicketIncidentCreateComponent } from './ticket.incident.component';
import { TicketIndexComponent } from "./ticket.index.component";
import { TicketEditComponent } from './ticket.edit.component'
import { ChangeTicketListComponent } from "./change.ticket.list.component";
import { IncidentTicketListComponent } from "./incident.ticket.list.component";
//import { RegisterComponent } from './register.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: IndexComponent,
        data: { title: 'Home' }
    },
    {
        path: 'about',
        component: AboutComponent,
        data: { title: 'About' }
    },
    {
        path: 'contact',
        component: ContactComponent,
        data: { title: 'Contact' }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: { Title: 'Login' }
    },
    {
        path: 'register',
        component: RegisterComponent,
        data: { Title: 'Register' }
    },
    {
        path: 'tickets/create',
        component: TicketCreateComponent,
        data: { Title: 'Create tickets' }
    },
    {
        path: 'tickets/incident',
        component: IncidentTicketListComponent,
        data: { Title: 'Incident tickets' }
    }
    ,
    {
        path: 'tickets/change',
        component: ChangeTicketListComponent,
        data: { Title: 'Change tickets' }
    }
    ,
    {
        path: 'tickets',
        component: TicketIndexComponent,
        data: { Title: 'My tickets' }
    },
    {
        path: 'tickets/:id/edit',
        component: TicketEditComponent,
        data: { Title: 'Edit ticket' }
    }

];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [AboutComponent, IndexComponent, ContactComponent, LoginComponent, RegisterComponent, TicketCreateComponent, TicketIncidentCreateComponent, TicketIndexComponent, TicketEditComponent, ChangeTicketListComponent, IncidentTicketListComponent];