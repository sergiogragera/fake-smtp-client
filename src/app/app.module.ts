import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './services/api.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailListComponent } from './pages/email-list/email-list.page';
import { EmailComponent } from './pages/email/email.page';

@NgModule({
  declarations: [
    AppComponent,
    EmailListComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
