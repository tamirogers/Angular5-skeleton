import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TriprequestComponent } from './triprequest/triprequest.component';
import { RequestComponent } from './triprequest/request/request.component';
import { RequestlistComponent } from './triprequest/requestlist/requestlist.component';
import { MylistComponent } from './mylist/mylist.component';

//  I added routing, the order matters
export const appRoutes: Routes = [
  { path: '',
      redirectTo: '/request',
      pathMatch: 'full'},
    { path: 'request', component: RequestComponent },
    { path: 'requestlist', component: RequestlistComponent },
    { path: 'mylist', component: MylistComponent },
      //  data: { title: 'mylist' }
    // wildcard route when no path found
    { path: '**', pathMatch:  'full', redirectTo: 'Sorry page not found' }
  ];

  // @NgModule({
  //   imports: [RouterModule.forRoot(appRoutes)],
  //   exports: [RouterModule],
  //   providers: [
  //   ]
  // })
  // export class AppRoutingModule {
  // }
