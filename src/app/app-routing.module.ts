import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayComponent } from './display/display.component';
import { ConnexionComponent } from './display/connexion/connexion.component';
import { ContactComponent } from './display/contact/contact.component';
import { HomeComponent } from './display/home/home.component';
import { InscriptionComponent } from './display/inscription/inscription.component';
import { ProductsComponent } from './display/products/products.component';
import { PromosComponent } from './display/promos/promos.component';
import { CartComponent } from './display/cart/cart.component';
import { CanapesComponent } from './display/canapes/canapes.component';
import { DecorationComponent } from './display/decoration/decoration.component';
import { MeublesComponent } from './display/meubles/meubles.component';
import { TablesComponent } from './display/tables/tables.component';
import { ProductPage1Component } from './display/products-pages/product-page1/product-page1.component';
import { ProductPage2Component } from './display/products-pages/product-page2/product-page2.component';
import { ProductPage3Component } from './display/products-pages/product-page3/product-page3.component';
import { ProductPage4Component } from './display/products-pages/product-page4/product-page4.component';
import { ProductPage5Component } from './display/products-pages/product-page5/product-page5.component';
import { ProductPage6Component } from './display/products-pages/product-page6/product-page6.component';
import { ProductPage7Component } from './display/products-pages/product-page7/product-page7.component';


const routes: Routes = [  {path: '', redirectTo: '/home', pathMatch: 'full'},
{ path: '', component: DisplayComponent,
children: [
{ path: 'home', component: HomeComponent },
{ path: 'contact', component: ContactComponent},
{ path: 'connexion', component: ConnexionComponent},
{ path: 'inscription', component: InscriptionComponent},
{ path: 'products', component: ProductsComponent},
{ path: 'promos', component: PromosComponent},
{ path: 'cart', component: CartComponent},
{ path: 'canapes', component: CanapesComponent},
{ path: 'decoration', component: DecorationComponent},
{ path: 'meubles', component: MeublesComponent},
{ path: 'tables', component: TablesComponent},
{ path: 'product452', component: ProductPage1Component},
{ path: 'product155', component: ProductPage2Component},
{ path: 'product164', component: ProductPage3Component},
{ path: 'product689', component: ProductPage4Component},
{ path: 'product841', component: ProductPage5Component},
{ path: 'product206', component: ProductPage6Component},
{ path: 'product783', component: ProductPage7Component},



]
}, 




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 

}
