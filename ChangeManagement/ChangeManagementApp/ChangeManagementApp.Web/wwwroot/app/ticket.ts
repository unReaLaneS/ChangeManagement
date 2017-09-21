import { Component } from '@angular/core'

export class Ticket {
    id: number;
    type: any;
    name: string;
    description: string;
    status: string;
    assignee: string;
    priority: string;
    dueDate: Date;
    createDate: Date;
    location: string;
}