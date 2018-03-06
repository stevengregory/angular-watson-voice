import { Component, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppService } from './app.service';

import * as recognizeMicrophone from 'watson-speech/speech-to-text/recognize-microphone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  text: any;
  token: any;

  constructor(private appService: AppService, private ngZone: NgZone) {}

  activateWatson(): any {
    this.appService.fetchToken().subscribe(token => {
      this.token = token;
      const stream = recognizeMicrophone({
        token: token,
        objectMode: true,
        extractResults: true,
        format: false
      });
      this.ngZone.runOutsideAngular(() => {
        stream.on('data', data => {
          this.ngZone.run(() => {
            this.text = data.alternatives[0].transcript;
          });
          console.log(this.text);
        });
      });
    });
  }
}
