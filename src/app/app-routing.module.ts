import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprovedComponent } from './component/aproved/aproved.component';
import { ClientComponent } from './component/client/client.component';
import { DisapprovedComponent } from './component/disapproved/disapproved.component';
import { EstateComponent } from './component/estate/estate.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'client', component: ClientComponent},
  { path: 'estate', component: EstateComponent},
  { path: 'aproved', component: AprovedComponent},
  { path: 'disapproved', component: DisapprovedComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
