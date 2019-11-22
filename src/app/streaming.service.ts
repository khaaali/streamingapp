import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { NgOpenCVService } from 'ng-open-cv';

@Injectable({
  providedIn: 'root'
})

export class StreamingService {

  	private url = 'http://localhost:3000';  // URL to web api
  	 private socket; 

  constructor(private ngOpenCVService: NgOpenCVService) { 
   this.socket = io(this.url);
}

 public sendMessage(message) {
        this.socket.emit('new-message', message);
    }

public getMessages = () => {
        return Observable.create((observer) => {
            this.socket.on('tcpdata', (message) => {

          let len=this.readIntegerFromCurrentPos(message);
                  console.log(len.toString());
                  const buffer = new ArrayBuffer(len);
                  
                 observer.next(message);
                 // console.log(message);
            });
        });
    }


  public readIntegerFromCurrentPos(buffer) {
  let currentPos = 0;
  var buf = Buffer.from(buffer);
  var len = buf.readUIntLE(currentPos, currentPos + 3);
  // currentPos+=3;
  return len;
}

}


