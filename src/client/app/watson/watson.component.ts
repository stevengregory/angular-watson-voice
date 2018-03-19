import { Component, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WatsonService } from './watson.service';
import { Transcription } from '../core';
import * as recognizeMicrophone from 'watson-speech/speech-to-text/recognize-microphone';

@Component({
  selector: 'app-watson',
  templateUrl: './watson.component.html',
  styleUrls: ['./watson.component.scss']
})
export class WatsonComponent {
  isStreaming: boolean;
  stream: any;
  text: string;
  token: string;

  constructor(private watsonService: WatsonService, private ngZone: NgZone) {}

  startSteam(): void {
    this.isStreaming = true;
    this.watsonService.fetchToken().subscribe(token => {
      this.stream = recognizeMicrophone(this.setStream(token));
      this.ngZone.runOutsideAngular(() => {
        this.stream.on('data', data => {
          this.ngZone.run(() => {
            this.text = data.alternatives[0].transcript;
          });
        });
      });
    });
  }

  setStream(token: string): Transcription {
    return {
      token: token,
      format: true,
      extractResults: true,
      objectMode: true
    };
  }

  stopStream(): void {
    if (this.stream) {
      this.isStreaming = false;
      this.stream.stop();
    }
  }
}
