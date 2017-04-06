import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { GridComponent } from './components/grid/grid.component';
import { KeysPipe } from './pipes/keys.pipe';
import { UsersService } from './providers/users.service';
import { NotifyComponent } from './components/notify/notify.component';

@NgModule({
  declarations: [
    AppComponent,
    DatepickerComponent,
    PaginationComponent,
    GridComponent,
    KeysPipe,
    NotifyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
