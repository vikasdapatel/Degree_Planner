import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SimulationPage } from '../pages/simulation/simulation';
import { CBSCBoard } from '../pages/cbsc-board/cbsc-board';
import { NonGraded } from '../pages/non-graded/non-graded';
import { AddTarget } from '../pages/add-target/add-target';

import { FilterGradeByGradePoint } from './pipes/filterGradeByGradePoint.pipe';
import { SafeHtml } from './pipes/safeHtml.pipe';

import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';
import { SplashScreen } from '@ionic-native/splash-screen';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SimulationPage,
    AddTarget,
    CBSCBoard,
    NonGraded,
    FilterGradeByGradePoint,
    SafeHtml
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SimulationPage,
    AddTarget,
    CBSCBoard,
    NonGraded
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    YoutubeVideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
