import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './componentes/template/footer/footer.component';
import { NavComponent } from './componentes/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component'
import { TimeCrudComponent } from './views/time-crud/time-crud.component';
import { TimeCreateComponent } from './componentes/time-create/time-create.component'

//Materials Imports:
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list';
import{MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatFormFieldModule} from '@angular/material/form-field'
import {FormsModule} from '@angular/forms'
import {MatInputModule} from '@angular/material/input'
import {CurrencyPipe} from '@angular/common'



import {HttpClientModule} from '@angular/common/http';
import { TimeReadComponent } from './componentes/time/time-read/time-read.component';
import { TimeUpdateComponent } from './componentes/time/time-update/time-update.component';
import { TimeDeleteComponent } from './componentes/time/time-delete/time-delete.component'



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    TimeCrudComponent,
    TimeCreateComponent,
    TimeReadComponent,
    TimeUpdateComponent,
    TimeDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    CurrencyPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
