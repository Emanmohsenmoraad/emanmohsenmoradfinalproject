import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CategoryComponent } from './category/category.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { JewelarComponent } from './jewelar/jewelar.component';
import { MapComponent } from './map/map.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { FeaturedComponent } from './featured/featured.component';
import { AtozproductComponent } from './atozproduct/atozproduct.component';
import { CartComponent } from './cart/cart.component';
import { RegistrationComponent } from './registration/registration.component';
import { FavoraiteComponent } from './favoraite/favoraite.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'shop',component:ShopComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'cat',component:CategoryComponent},
  {path:'men',component:MenComponent},
  {path:'women',component:WomenComponent},
  {path:'jewelery',component:JewelarComponent},
  {path:'map',component:MapComponent},
  {path:'elec',component:ElectronicsComponent},
  {path:'details/:id',component:ProductdetailsComponent},
  {path:'featured',component:FeaturedComponent},
  {path:'atoz',component:AtozproductComponent},
  {path:'cart',component:CartComponent},
  {path:'reg',component:RegistrationComponent},
  {path:'fav',component:FavoraiteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
