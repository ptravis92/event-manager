import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {
   EventRouteActivatorService,
   EventThumbnailComponent,
   EventDetailsComponent,
   EventsListComponent,
   CreateEventComponent,
   EventService,
   EventsListResolverService,
} from './events/index'
import { AppComponent } from './app.component';
import { ToasterService } from './common/toaster.service';
import { Error404Component } from './errors/404.component';
import { NavbarComponent } from './navbar/navbar.component';
import { appRoutes } from './routes';

@NgModule({
   declarations: [
      AppComponent,
      EventsListComponent,
      EventThumbnailComponent,
      EventDetailsComponent,
      NavbarComponent,
      CreateEventComponent,
      Error404Component
   ],
   providers: [
      EventService,
      ToasterService,
      EventRouteActivatorService,
      EventsListResolverService,
      {
         provide: 'canDeactivateCreateEvent', 
         useValue: checkDirtyState
      }
   ],
   imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
	],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
   if(component.isDirty){
      return window.confirm('You have not saved this event, Do you really want to cancel?');
   } else {
      return true;
   }
}
  