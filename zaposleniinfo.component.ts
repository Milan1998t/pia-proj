import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { zaposleni } from '../model/zaposleni';
import { ServisService } from '../servis.service';

@Component({
  selector: 'app-zaposleniinfo',
  templateUrl: './zaposleniinfo.component.html',
  styleUrls: ['./zaposleniinfo.component.css']
})
export class ZaposleniinfoComponent implements OnInit {

  constructor(private servis:ServisService,private sanitizer:DomSanitizer,private router:Router) { }

  ngOnInit(): void {
    // window.location.reload();
    this.setzap();
  }


  zaposlen:zaposleni;

  imageUrl:SafeUrl;


  setzap(){
    this.zaposlen=JSON.parse(localStorage.getItem('zaposleni'));
    console.log(this.zaposlen.kor_ime);

    this.servis.getPicture(this.zaposlen.kor_ime).subscribe((blob:any)=>{
      let url=URL.createObjectURL(blob);

      console.log(url);
      this.imageUrl=this.sanitizer.bypassSecurityTrustUrl(url);
      console.log(this.imageUrl);
      console.log('zavrsio');
    });
    // console.log('zavrsio');
  }

}
