import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './dashboard/account/signin/signin.component';
import { SignupComponent } from './dashboard/account/signup/signup.component';
import { AccountComponent } from './dashboard/myaccount/account/account.component';
import { AccountProfileComponent } from './dashboard/myaccount/account-profile/account-profile.component';
import { AccountAddressComponent } from './dashboard/myaccount/account-address/account-address.component';
import { AccountTrackComponent } from './dashboard/myaccount/account-track/account-track.component';
import { AccountOrdersComponent } from './dashboard/myaccount/account-orders/account-orders.component';
import { AccountPaymentComponent } from './dashboard/myaccount/account-payment/account-payment.component';
import { AccountReturnComponent } from './dashboard/myaccount/account-return/account-return.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShopGridComponent } from './shop-grid/shop-grid.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FaqComponent } from './faq/faq.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { Page404Component } from './page404/page404.component';
import { BlogleftsidebarComponent } from './blog/blogleftsidebar/blogleftsidebar.component';
import { BlogmasonryComponent } from './blog/blogmasonry/blogmasonry.component';
import { BlogdetailsComponent } from './blog/blogdetails/blogdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    AccountComponent,
    AccountProfileComponent,
    AccountAddressComponent,
    AccountTrackComponent,
    AccountOrdersComponent,
    AccountPaymentComponent,
    AccountReturnComponent,
    ProductDetailComponent,
    ShopGridComponent,
    ShoppingCartComponent,
    WishlistComponent,
    CheckoutComponent,
    FaqComponent,
    AboutusComponent,
    ContactComponent,
    Page404Component,
    BlogleftsidebarComponent,
    BlogmasonryComponent,
    BlogdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
