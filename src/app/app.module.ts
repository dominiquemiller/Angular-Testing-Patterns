import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AsyncService } from '../services/async.service';
import { SyncService } from '../services/sync.service';
import { UserResolver } from '../services/user.resolver.service';

import { AppComponent } from './app.component';
import { PeopleComponent } from '../people/containers/people.component';
import { UsersComponent } from '../users/containers/users.component';
import { NewUserFormComponent } from '../users/components/new-user-form.component';
import { CompWithRoutingComponent } from '../comp-with-routing/comp-with-routing.component';

import { FancyBoxDirective } from '../directives/fancy-box.directive';

const routes: Routes = [
  { path: 'users',
    component: UsersComponent,
    resolve: {
      list: UserResolver
    }
  },
  { path: 'people', component: PeopleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    UsersComponent,
    NewUserFormComponent,
    FancyBoxDirective,
    CompWithRoutingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AsyncService,
    SyncService,
    UserResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
