import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { zaposleni } from '../model/zaposleni';
import { NavbarComponent } from '../navbar/navbar.component';
import { ServisService } from '../servis.service';

@Component({
  selector: 'app-zaposleni',
  templateUrl: './zaposleni.component.html',
  styleUrls: ['./zaposleni.component.css']
})
export class ZaposleniComponent implements OnInit {

  constructor(private servis:ServisService,private router:Router) { }

  ngOnInit(): void {
    // window.location.reload(true);
    // if(this.cnt==1){
    //   this.reloadonfirst();
    // }
    // console.log(this.cnt);
    // location.reload();
    localStorage.removeItem('imapredmet');
    this.getzaposleni();
  }

  svizaposleni:zaposleni[];
  static cnt=1;
  

  reloadonfirst(){
    window.location.reload();
    // cnt=1;
  
  }


  getzaposleni(){



    this.servis.getzaposleni().subscribe((z:zaposleni[])=>{
      if(z){
        this.svizaposleni=z;
      }
    })
  }

  radi(zap){
    localStorage.setItem('zaposleni',JSON.stringify(zap));
    // alert('radi');
    this.router.navigate(['/zaposleni-info']);
  }
}
