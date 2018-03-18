import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { WatsonComponent } from './watson/watson.component';
import { WatsonService } from './watson/watson.service';

@NgModule({
  declarations: [AppComponent, WatsonComponent],
  imports: [BrowserModule, HttpClientModule, MatButtonModule],
  providers: [WatsonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
