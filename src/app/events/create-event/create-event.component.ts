import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from '../event-model';
import { EventService } from '../service/event.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  newEvent:IEvent;
  isDirty:boolean = true

  constructor(private router:Router, private eventService: EventService) { }

  saveEvent(formValues: IEvent) {
    this.eventService.saveEvent(formValues)
    this.isDirty = false
    this.router.navigate(['/events'])
    console.log(formValues)
  }

  cancel() {
    this.router.navigate(['/events'])
  }

  ngOnInit() {
  }

}
