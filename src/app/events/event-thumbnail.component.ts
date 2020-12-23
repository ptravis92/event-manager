import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{ event?.name }}</h2>
    <div>Date: {{ event?.date }}</div>
    <div>Time: {{ event?.time }}</div>
    <div [ngSwitch]="event?.time">
      <span *ngSwitchCase="'8:00 am'">Early Start</span>
      <span *ngSwitchCase="'10:00 am'">Late Start</span>
      <span *ngSwitchDefault>Normal Start</span>
    </div>
    <div>Price: {{ event?.price }}</div>
    <div *ngIf="event?.location">
      <span>Location: {{ event?.location.address }}</span>
      <span class="pad-left">{{ event?.location.city }}, {{ event.location.country }}</span>
    </div>
    <div *ngIf="event?.onlineUrl">
      Online URL: {{event?.onlineUrl}}
    </div>
  </div>
  `,
  styles: [`
    .pad-left { margin-left: 10px; },
    .well div { color: #bbb; },
    .thumbnail { min-height: 210px; }
  `]
  })
export class EventThumbnailComponent implements OnInit {

  @Input() event: IEvent;
  @Output() eventClick = new EventEmitter();

  ngOnInit() { }

  handleClickMe() {
    console.log('clicked');
    this.eventClick.emit('foo');
  }
}
