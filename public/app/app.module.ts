import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule, MatButtonModule, MatSelectModule, MatSidenavModule, MatMenuModule} from "@angular/material";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ScheduleComponent } from './schedule/schedule.component';

//services
import { AppdataService } from "./appdata.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    NoopAnimationsModule,
    FormsModule,

    //Material Components
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatSidenavModule,
    MatMenuModule
  ],
  providers: [ AppdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
