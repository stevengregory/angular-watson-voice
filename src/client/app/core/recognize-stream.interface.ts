export interface RecognizeStream {
  token: string;
  format?: boolean;
  keepMicrophone?: boolean;
  outputElement?: string;
  extractResults?: boolean;
  objectMode?: boolean;
  resultsBySpeaker?: boolean;
  mediaStream?: MediaStream;
}
