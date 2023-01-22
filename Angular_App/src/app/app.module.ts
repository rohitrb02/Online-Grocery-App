import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomepageComponent } from './Components/welcomepage/welcomepage.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './Components/category/category.component';
import { CustomerSupportComponent } from './Components/customer-support/customer-support.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { Header2Component } from './Components/header2/header2.component';
import { Welcome2Component } from './Components/welcome2/welcome2.component';
import { Footer2Component } from './Components/footer2/footer2.component';
import { ShopNowComponent } from './Components/shop-now/shop-now.component';
import { FruitsComponent } from './Components/fruits/fruits.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { EditProfileComponent } from './Components/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { AddCartComponent } from './Components/add-cart/add-cart.component';
import { PaymentsComponent } from './Components/payments/payments.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './Components/search/search.component';
import { RatingComponent } from './Components/rating/rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QueryComponent } from './Components/query/query.component';
import { ChatbotModelComponent } from './Components/chatbot-model/chatbot-model.component';
import { ChatComponent } from './Components/chat/chat.component';
import { PreviousOrderComponent } from './Components/previous-order/previous-order.component';
import { PreviousOrderProductComponent } from './Components/previous-order-product/previous-order-product.component';




const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    component: WelcomepageComponent
  },
  {
    path: "category",
    component: CategoryComponent
  },
  {
    path: "customer",
    component: CustomerSupportComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "aboutus",
    component: AboutUsComponent
  },
  {
    path: "home2",
    component: Welcome2Component
  },
  {
    path: "shopnow",
    component: ShopNowComponent
  },
  {
    path: "fruits/:id",
    component: FruitsComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "editprofile",
    component: EditProfileComponent
  },
  {
    path: "changepassword",
    component: ChangePasswordComponent
  },
  {
    path:"addcart",
    component:AddCartComponent
  },
  {
    path:"payment",
    component:PaymentsComponent
  },
  {
    path:"search/:searchValue",
    component:SearchComponent
  },
  {
    path:"rating",
    component:RatingComponent
  },
  {
    path:"query",
    component:QueryComponent
  },
  {
    path:"orderHistory",
    component:PreviousOrderComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    FooterComponent,
    HeaderComponent,
    CategoryComponent,
    CustomerSupportComponent,
    LoginComponent,
    RegisterComponent,
    AboutUsComponent,
    Header2Component,
    Welcome2Component,
    Footer2Component,
    ShopNowComponent,
    FruitsComponent,
    ProfileComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    AddCartComponent,
    PaymentsComponent,
    SearchComponent,
    RatingComponent,
    QueryComponent,
    ChatbotModelComponent,
    ChatComponent,
    PreviousOrderComponent,
    PreviousOrderProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
