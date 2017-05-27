import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdInputModule,MaterialModule ,MdNativeDateModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CloginComponent } from './clogin/clogin.component';
import { CmainComponent } from './cmain/cmain.component';
import { CcoffeeOrderComponent,CcoffeeComponent } from './ccoffee/ccoffee.component';
import { CbentoComponent } from './cbento/cbento.component';
import { routing } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    CloginComponent,
    CmainComponent,
    CcoffeeComponent,
    CbentoComponent,
    CcoffeeOrderComponent
  ],
  imports: [
    MdNativeDateModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdInputModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CcoffeeOrderComponent]


})
export class AppModule { }
