import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './dashboard/account/signin/signin.component';
import { SignupComponent } from './dashboard/account/signup/signup.component';
import { AccountAddressComponent } from './dashboard/myaccount/account-address/account-address.component';
import { AccountOrdersComponent } from './dashboard/myaccount/account-orders/account-orders.component';
import { AccountPaymentComponent } from './dashboard/myaccount/account-payment/account-payment.component';
import { AccountProfileComponent } from './dashboard/myaccount/account-profile/account-profile.component';
import { AccountReturnComponent } from './dashboard/myaccount/account-return/account-return.component';
import { AccountTrackComponent } from './dashboard/myaccount/account-track/account-track.component';
import { AccountComponent } from './dashboard/myaccount/account/account.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShopGridComponent } from './shop-grid/shop-grid.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'account',component:AccountComponent},
  {path:'account-profile',component:AccountProfileComponent},
  {path:'account-address',component:AccountAddressComponent},
  {path:'account-track',component:AccountTrackComponent},
  {path:'account-orders',component:AccountOrdersComponent},
  {path:'account-payment',component:AccountPaymentComponent},
  {path:'account-return',component:AccountReturnComponent},
  {path:'product-detail',component:ProductDetailComponent},
  {path:'shop-grid',component:ShopGridComponent},
  {path:'shopping-cart',component:ShoppingCartComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'faq',component:FaqComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
