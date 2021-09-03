import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { QRCodeModule } from 'angular2-qrcode';
import { ExportAsModule } from 'ngx-export-as';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QrFormComponent } from './qr-form/qr-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QrFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExportAsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
