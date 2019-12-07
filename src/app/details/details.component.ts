import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShoplService} from '../shopl.service';
import { Item } from 'Projet/Natara/src/app/item';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private active:ActivatedRoute,private shopService:ShoplService) { }
  id:string;
  Item;
  ngOnInit() {
    this.id = this.active.snapshot.params['id'];
    this.Item=this.shopService.getProduitById(this.id);
  }

}
