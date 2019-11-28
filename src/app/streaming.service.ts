import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';
import {NgOpenCVService} from 'ng-open-cv';

@Injectable({providedIn: 'root'})

export class StreamingService {

    private url = 'http://localhost:3000'; // URL to web api
    private socket;

    constructor(private ngOpenCVService : NgOpenCVService) {
        this.socket = io(this.url);
    }

    public sendMessage(message) {
        this
            .socket
            .emit('new-message', message);
    }

    public getMessages = () => {
        return Observable.create((observer) => {
            this
                .socket
                .on('tcpdata', (message) => {

                    let frame= new cv.Mat();
                    console.log(frame);
                    console.log(message);
                    observer.next(frame);
                    // console.log(message);
                });
        });
    }

}
