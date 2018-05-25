import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app.routing';
import { appRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { TriprequestComponent } from './triprequest/triprequest.component';
import { RequestComponent } from './triprequest/request/request.component';
import { RequestlistComponent } from './triprequest/requestlist/requestlist.component';
import { ToastrModule } from 'ngx-toastr';
import { MylistComponent } from './mylist/mylist.component';
import { RequestService } from './triprequest/shared/request.service';

@NgModule({
  declarations: [
    AppComponent,
    TriprequestComponent,
    RequestComponent,
    RequestlistComponent,
    MylistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    // AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
