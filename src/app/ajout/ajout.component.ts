import { Component, OnInit } from '@angular/core';
import{NgForm}from'@angular/forms';
import {ShoplService} from '../shopl.service';
@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})

export class AjoutComponent implements OnInit {

  constructor(private shopService:ShoplService){}
  prod=this.shopService.itemsList;
  iden:string;
  nom:string="";
  stock:number;
  prix:number;
  img:string="";
  ajout:boolean;
  availibility:boolean=false;
  info:string="";

  onSubmit(f:NgForm)
  {
    if (this.stock > 0){
      this.availibility=true;
    }
    this.ajout = this.shopService.ajouterProduit(f.value['Img'],f.value['Nom'],f.value['Prix'],this.availibility,f.value['Stock'],f.value['Id'],f.value['info'])
    if (this.ajout==true)
    {
      alert('Produit a été ajouté');
    }
    else alert("L'id existe déja");
    
  }
  ngOnInit() {
    
  }

}
