import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginModule } from './login/login.module';
import { MainModule } from './main/main.module';
import { LayoutModule } from '@angular/cdk/layout';

import { HttpClientModule } from "@angular/common/http";

import { DatabaseService } from "./service/database.service"
import { AuthConfigService } from './service/auth-config.service';
import { AuthConfigModule } from './config/auth.config.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    AuthConfigModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    LayoutModule,
    LoginModule,
    MainModule,
    RouterModule
  ],
  providers: [
    AuthConfigService,
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
