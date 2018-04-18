import { Component, NgZone, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WatsonService } from './watson.service';
import { Transcription } from '../core';
import * as recognizeMicrophone from 'watson-speech/speech-to-text/recognize-microphone';

@Component({
  selector: 'app-watson',
  templateUrl: './watson.component.html',
  styleUrls: ['./watson.component.scss']
})
export class WatsonComponent implements OnInit {
  isStreaming: boolean;
  stream: any;
  text: string;
  token: string;

  constructor(private watsonService: WatsonService, private ngZone: NgZone) {}

  ngOnInit() {
    this.getToken();
  }

  getToken(): void {
    this.watsonService.fetchToken().subscribe(token => (this.token = token));
  }

  setOptions(token: string): Transcription {
    return {
      token: token,
      format: true,
      extractResults: true,
      objectMode: true
    };
  }

  startStream(): void {
    this.isStreaming = true;
    this.stream = recognizeMicrophone(this.setOptions(this.token));
    this.ngZone.runOutsideAngular(() => {
      this.stream.on('data', data => {
        this.ngZone.run(() => {
          this.text = data.alternatives[0].transcript;
        });
      });
    });
  }

  stopStream(): void {
    if (this.stream) {
      this.isStreaming = false;
      this.stream.stop();
    }
  }
}
