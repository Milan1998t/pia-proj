import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { ServisService } from '../servis.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnChanges,DoCheck {

  constructor(private router:Router,private servis:ServisService) { }

  ngOnInit(): void {
    console.log('init');
    this.set();
    if(localStorage.getItem('imapredmet')!=null){
      this.predmetbar=true;
    }
    
  }
  
  ngDoCheck() : void{
    console.log('check');
    this.set();
    if(localStorage.getItem('imapredmet')!=null){
      this.predmetbar=true;
      this.ngOnInit();
    }else{
      this.predmetbar=false;
      
    
    }
  }

  public ngOnChanges(changes: SimpleChanges): void{
    console.log('promena');
    this.set();
    if(localStorage.getItem('imapredmet')!=null){
      this.predmetbar=true;
    }
  }

  zaposlenije=false;
  us:User;
  ulogovan=false;
  predmetbar=false;

  set(){
    this.us=JSON.parse(localStorage.getItem('user'));
    if(this.us==undefined){
      return;
    }
    if(this.us.tip==undefined){
      return;
    }
    if(this.us.tip=='zaposleni'){
      this.zaposlenije=true;
    }
    if(this.us!=undefined){
      this.ulogovan=true;
    }
  }
  log= new User();
  logout(){
    
    localStorage.clear();
    console.log('logout',this.log.kor_ime);
    localStorage.setItem('user',JSON.stringify(this.log));
    this.router.navigate(['/']);
    
  }

  cl(a){
    // alert(a);
    localStorage.setItem('vrstapredmeta',a);
    
  }
}
