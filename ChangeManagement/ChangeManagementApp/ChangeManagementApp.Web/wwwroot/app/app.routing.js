"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var about_component_1 = require("./about.component");
var index_component_1 = require("./index.component");
var contact_component_1 = require("./contact.component");
var login_component_1 = require("./login.component");
var register_component_1 = require("./register.component");
var ticket_create_component_1 = require("./ticket.create.component");
var ticket_incident_component_1 = require("./ticket.incident.component");
var ticket_index_component_1 = require("./ticket.index.component");
var ticket_edit_component_1 = require("./ticket.edit.component");
var change_ticket_list_component_1 = require("./change.ticket.list.component");
var incident_ticket_list_component_1 = require("./incident.ticket.list.component");
//import { RegisterComponent } from './register.component';
var appRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: index_component_1.IndexComponent,
        data: { title: 'Home' }
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent,
        data: { title: 'About' }
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent,
        data: { title: 'Contact' }
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent,
        data: { Title: 'Login' }
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent,
        data: { Title: 'Register' }
    },
    {
        path: 'tickets/create',
        component: ticket_create_component_1.TicketCreateComponent,
        data: { Title: 'Create tickets' }
    },
    {
        path: 'tickets/incident',
        component: incident_ticket_list_component_1.IncidentTicketListComponent,
        data: { Title: 'Incident tickets' }
    },
    {
        path: 'tickets/change',
        component: change_ticket_list_component_1.ChangeTicketListComponent,
        data: { Title: 'Change tickets' }
    },
    {
        path: 'tickets',
        component: ticket_index_component_1.TicketIndexComponent,
        data: { Title: 'My tickets' }
    },
    {
        path: 'tickets/:id/edit',
        component: ticket_edit_component_1.TicketEditComponent,
        data: { Title: 'Edit ticket' }
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
exports.routedComponents = [about_component_1.AboutComponent, index_component_1.IndexComponent, contact_component_1.ContactComponent, login_component_1.LoginComponent, register_component_1.RegisterComponent, ticket_create_component_1.TicketCreateComponent, ticket_incident_component_1.TicketIncidentCreateComponent, ticket_index_component_1.TicketIndexComponent, ticket_edit_component_1.TicketEditComponent, change_ticket_list_component_1.ChangeTicketListComponent, incident_ticket_list_component_1.IncidentTicketListComponent];
//# sourceMappingURL=app.routing.js.map