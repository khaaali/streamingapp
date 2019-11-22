import { Component,OnInit, ElementRef, ViewChild } from '@angular/core';
import {StreamingService} from './streaming.service'
import { NgOpenCVService, OpenCVLoadResult } from 'ng-open-cv';
import { fromEvent, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	 openCVLoadResult: Observable<OpenCVLoadResult>;

  title = 'stoicksVisonApp';
  message: string;
    messages: string[] = [];

@ViewChild('canvasOutput',{static:false})
  canvasOutput: ElementRef;

  constructor(
  	private ngOpenCVService: NgOpenCVService,
  	private streaming:StreamingService

  	) { }

  ngOnInit() {
    this.openCVLoadResult = this.ngOpenCVService.isReady$;
    this.streaming
      .getMessages()
      .subscribe((message: string) => {
        this.messages.push(message);
      });
  }

 loadImage(event) {
    if (event.target.files.length) {
      const reader = new FileReader();
      const load$ = fromEvent(reader, 'load');
      load$
        .pipe(
          switchMap(() => {
            return this.ngOpenCVService.loadImageToHTMLCanvas("./assets/pp.jpeg", this.canvasOutput.nativeElement);
          })
        )
        .subscribe(
          () => {},
          err => {
            console.log('Error loading image', err);
          }
        );
      reader.readAsDataURL(event.target.files[0]);
    }
  }
 


 sendMessage() {
    this.streaming.sendMessage(this.message);
    this.message = '';
  }

 // ngOnInit() {
 //    this.streaming
 //      .getMessages()
 //      .subscribe((message: string) => {
 //        this.messages.push(message);
 //      });
 //  }


}
