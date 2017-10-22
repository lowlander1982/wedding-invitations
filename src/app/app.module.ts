import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { InvitedComponent } from './invited/invited.component';
import { AdministrationComponent } from './administration/administration.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TruncatePipe } from './shared/helpers/truncate';

const appRoutes: Routes = [
  { path: 'admin/list', component: AdministrationComponent },
  { path: 'invitation/:id', component: InvitedComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InvitedComponent,
    AdministrationComponent,
    NotFoundComponent,
    TruncatePipe
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAUq8cEfGCLxn-YvBkghwEetK-ZW6gVL6E'
    })
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
