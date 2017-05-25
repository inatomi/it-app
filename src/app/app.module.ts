import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CloginComponent } from './clogin/clogin.component';
import { CmainComponent } from './cmain/cmain.component';
import { CcoffeeComponent } from './ccoffee/ccoffee.component';
import { CbentoComponent } from './cbento/cbento.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    CloginComponent,
    CmainComponent,
    CcoffeeComponent,
    CbentoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
