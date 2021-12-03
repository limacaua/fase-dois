import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { EstateComponent } from './component/estate/estate.component';
import { ClientComponent } from './component/client/client.component';
import { AprovedComponent } from './component/aproved/aproved.component';
import { DisapprovedComponent } from './component/disapproved/disapproved.component';
import { AlessandroComponent } from './app/component/alessandro/alessandro.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ClientComponent,
    EstateComponent,
    AprovedComponent,
    DisapprovedComponent,
    AlessandroComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot({dropSpecialCharacters:false}),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
