import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {CatalogComponent} from "./catalog/catalog.component";
import {CartComponent} from "./cart/cart.component";
import {SignInComponent} from "./user/sign-in/sign-in.component";
import {TemplateFormControlsComponent} from "./user/template-form-controls/template-form-controls.component";
import {RegisterComponent} from "./user/register/register.component";

// routes is an object to map urls to components
const routes: Routes = [
  {path: 'home', component: HomeComponent, title: "Home - Joe's Robot Shop"},
  {path: 'catalog', component: CatalogComponent, title: "Catalog - Joe's Robot Shop"},
  {path: 'cart', component: CartComponent, title: "Cart - Joe's Robot Shop"},
  {path: 'login', component: SignInComponent, title: "Login - Joe's Robot Shop"},
  {path: 'register', component: RegisterComponent, title: "Register - Joe's Robot Shop"},
  {path: 'form-controls', component: TemplateFormControlsComponent, title: "Form - Joe's Robot Shop"},
  {path: '', redirectTo: '/home', pathMatch: 'full'}, // I need to understand this
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
