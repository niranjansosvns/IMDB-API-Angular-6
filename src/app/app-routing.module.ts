import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarWarComponent } from './star-war/star-war.component';
import { StarwarDetailComponent } from './starwar-detail/starwar-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StarwarSearchComponent } from './starwar-search/starwar-search.component';

const routes: Routes = [
  {path: 'starwar', component : StarWarComponent  },
  { path: 'starwarSearch', component: StarwarSearchComponent },  
  { path: 'starwareDetail', component: StarwarDetailComponent },
  { path : 'message', component : MessagesComponent},
  { path: '',redirectTo: 'starwar', pathMatch: 'full'},
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  declarations: [],
  exports: [ RouterModule],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }


