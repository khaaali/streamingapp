import { Component } from '@angular/core';
import {StreamingService} from './streaming.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stoicksVisonApp';
  message: string;
    messages: string[] = [];

  constructor(private streaming:StreamingService){

  }

 sendMessage() {
    this.streaming.sendMessage(this.message);
    this.message = '';
  }

 ngOnInit() {
    this.streaming
      .getMessages()
      .subscribe((message: string) => {
        this.messages.push(message);
      });
  }


}
