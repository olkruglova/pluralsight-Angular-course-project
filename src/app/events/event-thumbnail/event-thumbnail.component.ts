import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../event-model';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event:IEvent
  @Output() eventClick = new EventEmitter()

  handleClickMe = () => this.eventClick.emit('foo');

  getStartTimeClass = () => {
    if (this.event && this.event.time ==='8:00 am')
      return 'green bold' //add classes "green" and "bold"
    return ''
  }

  constructor() { }

  ngOnInit() {
  }

}
