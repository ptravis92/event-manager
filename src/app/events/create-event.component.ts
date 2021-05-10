import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService, IEvent } from './shared';

@Component({
    templateUrl: 'create-event.component.html',
    styleUrls: ['../common/validation.css']
})

export class CreateEventComponent {
    isDirty = true;
    newEvent: IEvent;

    constructor(private router: Router, private eventService: EventService) { }

    SaveEvent(formValues) {
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.cancel();
    }

    cancel() {
        this.router.navigate(['/events']);
    }
}
