import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StreamingService {

  	private url = 'http://localhost:3000';  // URL to web api
  	 private socket; 

  constructor() { 
   this.socket = io(this.url);
}

 public sendMessage(message) {
        this.socket.emit('new-message', message);
    }

public getMessages = () => {
        return Observable.create((observer) => {
            this.socket.on('tcpdata', (message) => {
                 observer.next(message);
                 console.log(message);
            });
        });
    }

}
