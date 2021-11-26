import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { EstateComponent } from './component/estate/estate.component';
import { ClientComponent } from './component/client/client.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AprovedComponent } from './component/aproved/aproved.component';
import { DisapprovedComponent } from './component/disapproved/disapproved.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ClientComponent,
    EstateComponent,
    AprovedComponent,
    DisapprovedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
