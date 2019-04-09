import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { ErrorLinkComponent } from './errors/error-link/error-link.component';
import { EventRouteActivator } from './events/service/event-route-activator.service';
import { eventListResolver } from './events/service/events-list-resolver.service';
import { ProfileComponent } from './user/profile/profile.component';
import { CreateSessionComponent } from './events/event-details/create-session/create-session.component'

const routes: Routes = [
    {path: 'events', component: EventsListComponent, resolve: {events:eventListResolver}},
    {path: 'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
    {path: 'events/:id', component: EventDetailsComponent, canActivate:[EventRouteActivator]},
    {path: '404', component: ErrorLinkComponent},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user', loadChildren: '../app/user/user.module#UserModule' },
    {path: 'events/session/new', component: CreateSessionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
