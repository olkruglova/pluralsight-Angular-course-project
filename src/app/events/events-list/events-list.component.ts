import { Component, OnInit } from '@angular/core';
import { EventService } from '../service/event.service';
import { ToastrService } from '../service/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../event-model';


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events:IEvent[]

  constructor(private eventServise: EventService, private toastr:ToastrService, private route:ActivatedRoute) { }

  handleEventClicked = (data) => console.log('recieved:', data);
  handleThumbnailClick(eventName) {
    this.toastr.success(eventName)
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }

}
