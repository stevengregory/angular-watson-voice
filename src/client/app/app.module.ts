import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpModule, MatButtonModule],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
