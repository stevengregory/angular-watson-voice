import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WatsonComponent } from './watson/watson.component';
import { WatsonService } from './watson/watson.service';

import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [AppComponent, WatsonComponent],
  imports: [BrowserModule, HttpModule, MatButtonModule],
  providers: [WatsonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
