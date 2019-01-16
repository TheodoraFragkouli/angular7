import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpModule} from "@angular/http";
import {SharedModule} from "./shared/shared.module";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {AuthModule} from "./auth/auth.module";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, //it contains common module plus some more features

    ShoppingListModule,
    AuthModule,
    CoreModule,
    AppRoutingModule,
    SharedModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
