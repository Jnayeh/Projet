import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ShopClientComponent } from './shop-client/shop-client.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ShopAdminComponent } from './shop-admin/shop-admin.component';
import { DetailsComponent } from './details/details.component';
import { Error404Component } from './error404/error404.component';
import { PanierComponent } from './panier/panier.component';
import { AjoutComponent } from './ajout/ajout.component';
import { PersonalisedPipe } from './personalised.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShopClientComponent,
    ShopAdminComponent,
    DetailsComponent,
    Error404Component,
    PanierComponent,
    AjoutComponent,
    PersonalisedPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
