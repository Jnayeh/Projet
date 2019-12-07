import { Injectable } from '@angular/core';
import {Item} from './item'

@Injectable({
  providedIn: 'root'
})
export class ShoplService {
  
  itemsList=[new Item("../../assets/s8.png","Samsung Galaxy S8",600,true,10,"s8"),
  new Item("../../assets/n1110.png","Nokia 1110",4000,false,0,"n1"),
new Item("../../assets/s10.png","Samsung Galaxy S10",800,false,0,"s10"),
new Item("../../assets/i11.png","Iphone 11",1400,true,10,"i11"),
new Item("../../assets/sf.jpg","Samsung Galaxy S Fold",1500,true,69,"sf"),
new Item("../../assets/sf.jpg","Samsung Galaxy S Fold",1600,true,69,"s")]
x;
admn:boolean=false;
panier=[];


getProduitById(i){
  for(let p of this.itemsList){
    if(p.id==i){
      return p;
    }
  }
  return null;
}


//Ajout d'un produit à la liste
ajouterProduit(i:string,n:string,p:number,a:boolean,s:number,id:string,){
  if (this.getProduitById(id)==null){
    this.itemsList.push(new Item(i,n,p,a,s,id));
    return true;
  }
  else {return false}

}
supprimerProduit(k:number){
  this.itemsList.splice(k, 1);
}

//Incrémentation du stock
ajouterStock(i:string){
for (let x of this.itemsList){
  if (i==x.id){
    x.stock++;
    x.availability=true;
  }
}
}
public chercherProduits(n:string,p:string)
{
  if((n=='')&&(p=='')){
    return this.itemsList;
  }
  else {
  let recherche=[];
  for (let x of this.itemsList){
    let j=0;
    // Recherche par Nom
    if (n!=''){
    for (let i=0 ; i<n.length; i++)
    {
      if (x.nom[i]==n[i])
      {
        j++;
      }
      //Recherche par Nom
    }
    if (j==n.length){
      recherche.push(x);}
      }
  
  else if (p!=''){
    for (let i=0 ; i<p.length; i++)
    {
      if (String(x.prix)[i]==p[i])
      {
        j++;
      }
    }
    if (j==p.length){
      recherche.push(x);}
  }
    /*Recherche par 2 critères
    
    else if ((n!='')&&(p!='')){
      let np=n+p;
    let z=x.nom+String(x.prix);
    for (let i=0 ; i<np.length; i++)
    {
      if (z[i]==np[i])
      {
        j++;
      }
    }
    if (j==np.length){
      recherche.push(x);}
  }*/
  }
  return recherche;}
}
//Ajout d'un item au panier
AjouterAuPanier(i:number){
  if (this.panier[0]==null)
  {this.panier[0]=this.itemsList[i];}
  else {
  this.panier.push(this.itemsList[i]);}
  return this.panier;
}
  constructor() { }
  
//ecraser un item du panier
supprimerduPanier(k:number){

  this.panier.splice(k, 1);
  
  }

/*this doesn't work in panier but you can use it in details
acheterProduit(x:number,i:number){
  if (x>=this.itemsList[i].prix){
    this.itemsList[i].stock--;
    if (this.itemsList[i].stock==0){
      this.itemsList[i].availability=false;
    }
    return x-this.itemsList[i].prix;
  }
}*/
//Panier Achat de tout les produits
AcheterduPanier()
{let s=this.calculerPrixTot();
  if (confirm ("Confirmer l'achat")){
    let i=-1;
   for(let x=this.panier.length;x>0;x--){
     
     i++;
     
     if(this.panier[x-1].availability==true){
       for (let y of this.itemsList){
         if (y==this.panier[x-1]){
       y.stock--;
       if (this.panier[x-1].stock==0){
         y.availability=false;
       }
      break;
      }
      }
this.supprimerduPanier(x-1);

     }
     else {alert (this.panier[x-1].nom+' is out of stock');}
    }
    }
}

//Calcule de prix des items dans la panier
calculerPrixTot(){
  let s=0;
  for(let x=0;x<this.panier.length;x++){
    s+=this.panier[x].prix;
  }
  return s;
}
}

//Custom pipe
import {  
    Pipe,  
    PipeTransform  
} from '@angular/core';  
@Pipe({  
    name: 'bold'  
})  
export class BoldPipe implements PipeTransform {  
    transform(value: string): any {  
        return '<b>' + value + '</b>';  
    }  
} 