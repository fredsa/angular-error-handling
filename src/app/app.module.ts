import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorHandlerModule } from './error-handler/error-handler.module';
import { DivConsoleComponent } from './div-console/div-console.component';

@NgModule({
  declarations: [
    AppComponent,
    DivConsoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: ErrorHandler, useClass: ErrorHandlerModule }],
  bootstrap: [AppComponent]
})
export class AppModule { }
