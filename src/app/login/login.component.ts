import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ShoplService} from '../shopl.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router:Router,private service:ShoplService) {

  }
  pw:string;
  username:string;
  logAsAdmin(pw:string,un:string){
    if ((pw==un)&&(un=='admin')){
      this.router.navigate(['shopAdmin']); 
this.service.admn=true;
    }
    else {
      alert ('Unvalid password and username combination!  (◉ω◉)');
    }
    }
    

  ngOnInit() {
  }

}
