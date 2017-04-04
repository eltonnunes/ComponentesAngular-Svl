import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { GridComponent } from './components/grid/grid.component';
import { KeysPipe } from './pipes/keys.pipe';
import { VideosService } from './providers/videos.service';

@NgModule({
  declarations: [
    AppComponent,
    DatepickerComponent,
    PaginationComponent,
    GridComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [VideosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
