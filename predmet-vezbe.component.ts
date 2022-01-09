import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { link } from '../model/link';
import { predmet } from '../model/predmet';
import { ServisService } from '../servis.service';

@Component({
  selector: 'app-predmet-vezbe',
  templateUrl: './predmet-vezbe.component.html',
  styleUrls: ['./predmet-vezbe.component.css']
})
export class PredmetVezbeComponent implements OnInit {

  constructor(private servis:ServisService,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.nov();
  }

  predmete:predmet;
  ime:string;
  ispis=new Array();
  d;
  tr=false;
  fileUrl:SafeUrl;
  t:link;
  srcData : SafeResourceUrl;
  
  nov(){
    let i=localStorage.getItem('predmet');
    this.tr=true;
    this.servis.getPredmet(i).subscribe((is:predmet)=>{
      if(is){
        this.predmete=is;
        // console.log(this.predmete);
        for(this.t of this.predmete.vezbe){
          if(this.t!=null){
            // alert(t.fajl);
             let te=this.t['fajl'];
             console.log(te);
              this.servis.getFile(te).subscribe((blob:any)=>{
              let url=URL.createObjectURL(blob);
              
              this.fileUrl=this.sanitizer.bypassSecurityTrustUrl(url);
              console.log(this.fileUrl);
              this.d={
                name:te,
                url:this.fileUrl['changingThisBreaksApplicationSecurity']
              }
              this.ispis.push(this.d);
            });
          }
        }
      }
    });
     console.log(this.ispis);
  }

}


/*
<tr *ngIf='ispis'>
            <tr *ngFor='let p of ispis'>
                <td>
                    <a >
                    {{p.name}}
                    </a>
                </td>
            </tr>
        </tr>

        */