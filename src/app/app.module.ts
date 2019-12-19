import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StreamingService} from './streaming.service'
import { FormsModule } from '@angular/forms';
import { OpenCVOptions } from 'projects/ng-open-cv/src/public_api';
import { NgOpenCVModule } from 'ng-open-cv';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
const openCVConfig: OpenCVOptions = {
  scriptUrl: `assets/opencv/opencv.js`,
  wasmBinaryFile: 'assets/opencv/opencv_js.wasm',
  usingWasm: true
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
     NgOpenCVModule.forRoot(openCVConfig),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [StreamingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
