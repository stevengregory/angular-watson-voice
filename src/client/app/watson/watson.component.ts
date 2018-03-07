import { Component, OnInit, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WatsonService } from './watson.service';

import * as recognizeMicrophone from 'watson-speech/speech-to-text/recognize-microphone';

@Component({
  selector: 'app-watson',
  templateUrl: './watson.component.html',
  styleUrls: ['./watson.component.scss']
})
export class WatsonComponent implements OnInit {
  text: any;
  token: any;

  constructor(private watsonService: WatsonService, private ngZone: NgZone) {}

  ngOnInit() {}

  activateWatson(): any {
    this.watsonService.fetchToken().subscribe(token => {
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
