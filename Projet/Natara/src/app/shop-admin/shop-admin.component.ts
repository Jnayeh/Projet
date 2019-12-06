import { Component, OnInit } from '@angular/core';
import {ShoplService} from '../shopl.service';

@Component({
  selector: 'app-shop-admin',
  templateUrl: './shop-admin.component.html',
  styleUrls: ['./shop-admin.component.css']
})
export class ShopAdminComponent implements OnInit {
  constructor(private shopService:ShoplService){}
 

  
  
  nom:string="";
  prix:string="";
  ngOnInit() {
  
  }
  
}
