import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppService } from './app.service';

import * as recognizeMicrophone from 'watson-speech/speech-to-text/recognize-microphone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  @Input() text: any;
  token: any;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.doVoiceToSpeech();
  }

  doVoiceToSpeech(): any {
    this.appService.doVoiceToSpeech().subscribe(token => {
      this.token = token;
      console.log('token: ' + this.token);
      const stream = recognizeMicrophone({
        token: token,
        objectMode: true,
        extractResults: true,
        format: false
      });
      stream.on('data', data => {
        this.text = data.alternatives[0].transcript;
        console.log(this.text);
      });
    });
  }
}
