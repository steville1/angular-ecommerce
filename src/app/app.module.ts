import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { ProductService } from './services/product.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component'
import { ReactiveFormsModule } from '@angular/forms';
import { LoginStatusComponent } from './components/login-status/login-status.component';

import {
  OktaCallbackComponent,
  OKTA_CONFIG, 
  OktaAuthModule,
  OktaAuthGuard
} from '@okta/okta-angular';

import { MembersPageComponent } from './components/members-page/members-page.component';
import { SigninComponent } from './components/signin/signin.component';
import { SigninStatusComponent } from './components/signin-status/signin-status.component';
import { authGuard } from './guards/auth.guard';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { AuthService } from './services/auth.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';


const routes: Routes = [
 /**  {path: 'members', component: MembersPageComponent, canActivate: [OktaAuthGuard],
          data: {onAuthRequired: sendToLoginPage}
  },
  **/
  {path: 'members', component: MembersPageComponent, canActivate: [authGuard]},
  {path: 'order-history', component: OrderHistoryComponent, canActivate: [authGuard]},
  {path: 'signin', component: SigninComponent},

  {path: 'checkout', component: CheckoutComponent},
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'search/:keyword', component: ProductListComponent},
  {path: 'category/:id', component: ProductListComponent},
  {path: 'category', component: ProductListComponent},
  {path: 'products', component: ProductListComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'category/:id', component: ProductListComponent},
  {path: '**', redirectTo: '/products', pathMatch: 'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    LoginStatusComponent,
    MembersPageComponent,
    SigninComponent,
    SigninStatusComponent,
    OrderHistoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    OktaAuthModule,

  ],
  providers: [ProductService, AuthService, // Provide your AuthService
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true // Indicates multiple interceptors can be added
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
