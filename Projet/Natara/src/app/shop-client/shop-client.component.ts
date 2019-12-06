import { Component, OnInit, Input } from '@angular/core';
import {ShoplService} from '../shopl.service';
@Component({
  selector: 'app-shop-client',
  templateUrl: './shop-client.component.html',
  styleUrls: ['./shop-client.component.css']
})
export class ShopClientComponent implements OnInit {
  
  constructor(private shopService:ShoplService){}
  goods=[];
  nom:string="";
  prix:string="";
  ngOnInit() {
this.goods=this.shopService.itemsList;

}

}
