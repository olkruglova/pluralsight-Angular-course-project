import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { EventService } from './events/service/event.service';
import { ToastrService } from './events/service/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ErrorLinkComponent } from './errors/error-link/error-link.component';
import { EventRouteActivator } from './events/service/event-route-activator.service';
import { eventListResolver } from './events/service/events-list-resolver.service';
import { AuthService } from '../app/events/service/auth.service';
import { CreateSessionComponent } from '../app/events/event-details/create-session/create-session.component'
import { SessionListComponent } from './events/event-details/session-list/session-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorLinkComponent,
    CreateSessionComponent,
    SessionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    eventListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not save this event, do you really want to cancel?')
  return true
}