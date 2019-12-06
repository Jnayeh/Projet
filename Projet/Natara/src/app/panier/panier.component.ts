import { Component, OnInit } from '@angular/core';
import {ShoplService} from '../shopl.service';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  panier=[];
  prixtot:number;
  constructor(private shopService:ShoplService){}

  ngOnInit() {
    this.panier=this.shopService.panier;
   this.prixtot=this.shopService.calculerPrixTot();

  }

}
