import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './display/home/home.component';
import { ProductsComponent } from './display/products/products.component';
import { ContactComponent } from './display/contact/contact.component';
import { ConnexionComponent } from './display/connexion/connexion.component';
import { InscriptionComponent } from './display/inscription/inscription.component';
import { DisplayComponent } from './display/display.component';
import { PromosComponent } from './display/promos/promos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartComponent } from './display/cart/cart.component';
import { MeublesComponent } from './display/meubles/meubles.component';
import { CanapesComponent } from './display/canapes/canapes.component';
import { TablesComponent } from './display/tables/tables.component';
import { DecorationComponent } from './display/decoration/decoration.component';
import { ProductPage1Component } from './display/products-pages/product-page1/product-page1.component';
import { ProductPage2Component } from './display/products-pages/product-page2/product-page2.component';
import { ProductPage3Component } from './display/products-pages/product-page3/product-page3.component';
import { ProductPage4Component } from './display/products-pages/product-page4/product-page4.component';
import { ProductPage5Component } from './display/products-pages/product-page5/product-page5.component';
import { ProductPage6Component } from './display/products-pages/product-page6/product-page6.component';
import { ProductPage7Component } from './display/products-pages/product-page7/product-page7.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    ConnexionComponent,
    InscriptionComponent,
    DisplayComponent,
    PromosComponent,
    CartComponent,
    MeublesComponent,
    CanapesComponent,
    TablesComponent,
    DecorationComponent,
    ProductPage1Component,
    ProductPage2Component,
    ProductPage3Component,
    ProductPage4Component,
    ProductPage5Component,
    ProductPage6Component,
    ProductPage7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
