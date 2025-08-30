import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {CatalogComponent} from './catalog/catalog.component';
import {SiteHeaderComponent} from "./site-header/site-header.component";
import {HttpClientModule} from "@angular/common/http";
import {CartComponent} from './cart/cart.component';
import {AppRoutingModule} from './app-routing.module';
import {UserModule} from "./user/user.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomeComponent,
    CatalogComponent,
    SiteHeaderComponent,
    CartComponent,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    UserModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
