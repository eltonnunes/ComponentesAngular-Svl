import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { GridComponent } from './components/grid/grid.component';
import { KeysPipe } from './pipes/keys.pipe';
import { UsersService } from './providers/users.service';
import { AlertsComponent } from './components/alerts/alerts.component';
import { InputComponent } from './components/input/input.component';
import { GridExemploComponent } from './components/grid-exemplo/grid-exemplo.component';
import { InputExemploComponent } from './components/input-exemplo/input-exemplo.component';
import { AlertExemploComponent } from './components/alert-exemplo/alert-exemplo.component';
import { RadioComponent } from './components/radio/radio.component';
import { RadioExemploComponent } from './components/radio-exemplo/radio-exemplo.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ButtonsExemploComponent } from './components/buttons-exemplo/buttons-exemplo.component';

// Rotas
const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'input', component: InputExemploComponent },
  { path: 'grid', component: GridExemploComponent },
  { path: 'alert', component: AlertExemploComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'radio', component: RadioExemploComponent },
  { path: 'buttons', component: ButtonsExemploComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DatepickerComponent,
    PaginationComponent,
    GridComponent,
    KeysPipe,
    AlertsComponent,
    InputComponent,
    GridExemploComponent,
    InputExemploComponent,
    AlertExemploComponent,
    RadioComponent,
    RadioExemploComponent,
    ButtonsComponent,
    ButtonsExemploComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})

export class AppModule { }