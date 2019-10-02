import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { DogsService } from './services/dogs.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';

import { MatToolbarModule, MatCardModule, MatInputModule, MatSelectModule, MatSliderModule, MatButtonModule } from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule, 
    MatSelectModule,
    MatSliderModule,
    MatButtonModule
  ],
  providers: [DogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
