import { Component, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WatsonService } from './watson.service';
import * as recognizeMicrophone from 'watson-speech/speech-to-text/recognize-microphone';

@Component({
  selector: 'app-watson',
  templateUrl: './watson.component.html',
  styleUrls: ['./watson.component.scss']
})
export class WatsonComponent {
  stream: any;
  text: String;
  token: Object;

  constructor(private watsonService: WatsonService, private ngZone: NgZone) {}

  activateWatson(): void {
    this.watsonService.fetchToken().subscribe(token => {
      this.token = token;
      this.stream = recognizeMicrophone({
        token: token,
        objectMode: true,
        extractResults: true,
        format: true
      });
      this.ngZone.runOutsideAngular(() => {
        this.stream.on('data', data => {
          this.ngZone.run(() => {
            this.text = data.alternatives[0].transcript;
          });
          console.log(this.text);
        });
      });
    });
  }

  stopStream(): void {
    if (this.stream) {
      this.stream.stop();
    }
  }
}
