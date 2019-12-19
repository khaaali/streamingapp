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
import { HomeNavComponent } from './home-nav/home-nav.component';
import { SeatsNavComponent } from './seats-nav/seats-nav.component';
import { WifiNavComponent } from './wifi-nav/wifi-nav.component';
import { SettingsNavComponent } from './settings-nav/settings-nav.component';
import { ShowRightNavComponent } from './show-right-nav/show-right-nav.component';
const openCVConfig: OpenCVOptions = {
  scriptUrl: `assets/opencv/opencv.js`,
  wasmBinaryFile: 'assets/opencv/opencv_js.wasm',
  usingWasm: true
};


@NgModule({
  declarations: [
    AppComponent,
    HomeNavComponent,
    SeatsNavComponent,
    WifiNavComponent,
    SettingsNavComponent,
    ShowRightNavComponent
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
