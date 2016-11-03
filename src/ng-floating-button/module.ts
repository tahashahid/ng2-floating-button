import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { NgFloatingButtonComponent } from './ng-floating-button.component';
import { MfbButtonComponent } from './mfb-button/mfb-button.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    NgFloatingButtonComponent,
    MfbButtonComponent
  ],

  exports: [NgFloatingButtonComponent]
})
export class ng2mfbModule { }
