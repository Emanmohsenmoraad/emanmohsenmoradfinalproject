import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { JewelarComponent } from './jewelar/jewelar.component';
import { MapComponent } from './map/map.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { FeaturedComponent } from './featured/featured.component';
import { AtozproductComponent } from './atozproduct/atozproduct.component';
import { CartComponent } from './cart/cart.component';
import { RegistrationComponent } from './registration/registration.component';
import { FavoraiteComponent } from './favoraite/favoraite.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ShopComponent,
    ContactusComponent,
    HeaderComponent,
    CategoryComponent,
    MenComponent,
    WomenComponent,
    JewelarComponent,
    MapComponent,
    ElectronicsComponent,
    ProductdetailsComponent,
    FeaturedComponent,
    AtozproductComponent,
    CartComponent,
    RegistrationComponent,
    FavoraiteComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
