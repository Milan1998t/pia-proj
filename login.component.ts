import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { User } from '../model/user';
import { ServisService } from '../servis.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private servis:ServisService,private router:Router) { }

  ngOnInit(): void {
    localStorage.setItem('user',JSON.stringify(this.uu));
    localStorage.removeItem('imapredmet');
    // localStorage.clear();
  }

  kor_ime:string;
  lozinka:string;
  poruka:string;

  kor_ime_valid=true;
  lozinka_valid=true;
  ulogovan=false;
  uu=new User();
  


  login(){
    if(this.kor_ime==undefined){
      this.poruka="niste uneli korisnicko ime";
      this.kor_ime_valid=false;
      return;
    }
    if(this.lozinka==undefined){
      this.poruka="niste uneli lozinku";
      this.lozinka_valid=false;
      return;
    }

    this.servis.login(this.kor_ime,this.lozinka).subscribe((u:User)=>{
      if(u){
        localStorage.setItem('user',JSON.stringify(u));
        if(u.prviput==true){
          this.router.navigate(['promenasifre']);
          return;
        }
        
        this.ulogovan=true;
        if(u.tip=='admin'){
          this.router.navigate(['admin']);

        }
        if(u.tip=='zaposleni'){
          this.router.navigate(['zaposleni']);
        }
        if(u.tip=='student'){
          this.router.navigate(['student']);
        }
      }else{
        console.log(this.kor_ime);
        this.poruka='ne postoji korisnik';
        this.kor_ime_valid=false;
        this.lozinka_valid=false;
      }
    });
  }

}
