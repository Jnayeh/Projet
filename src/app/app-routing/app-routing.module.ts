import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ShopClientComponent } from '../shop-client/shop-client.component';
import { DetailsComponent } from '../details/details.component';
import { Error404Component } from '../error404/error404.component';
import { ShopAdminComponent } from '../shop-admin/shop-admin.component';
import { PanierComponent } from '../panier/panier.component';
import { AjoutComponent } from '../ajout/ajout.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'shopClient',component:ShopClientComponent},
  {path:'shopAdmin',component:ShopAdminComponent},
  {path:'Details/:id',component:DetailsComponent},
  {path:'ajout',component:AjoutComponent},
  {path:'panier',component:PanierComponent},
  { path: '', redirectTo:'login', pathMatch:'full' },
  {path:'**',component:Error404Component},
    
];

@NgModule({
  declarations: [],
  imports: [
  RouterModule.forRoot(routes)
],
exports: [
  RouterModule
]
})
export class AppRoutingModule { }
