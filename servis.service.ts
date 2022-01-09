import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServisService {

  constructor(private http:HttpClient) { }


  uri = 'http://localhost:4000';

  login(kor_ime,lozinka){
    const data={
      kor_ime:kor_ime,
      lozinka:lozinka
    };

    return this.http.post(`${this.uri}/login`,data);
  }


  registacijazaposlenih(kor_ime,lozinka,ime,prezime,adresa,brojtel,brojkabineta,adresalicnogsajta,licnipodaci,zvanje,status){


    const data={
      kor_ime:kor_ime,
      lozinka:lozinka,
      ime:ime,
      prezime:prezime,
      adresa:adresa,
      brojtel:brojtel,
      brojkabineta:brojkabineta,
      adresalicnogsajta:adresalicnogsajta,
      licnipodaci:licnipodaci,
      zvanje:zvanje,
      status:status,
      tip:'zaposleni',
      predmeti:{},
      prviput:true
    }

    return this.http.post(`${this.uri}/registracijazaposlenih`,data);

  }

  registracija(kor_ime,lozinka,tip,indeks,ime,prezime,smer){


    const data={
      kor_ime:kor_ime,
      lozinka:lozinka,
      tipstudije:tip,
      indeks:indeks,
      ime:ime,
      prezime:prezime,
      tip:'student',
      prviput:true,
      predmeti:{},
      smer:smer
    }

   return this.http.post(`${this.uri}/registracija`,data);

  }


  dohvatistarusifru(kor_ime){
    const data={
      kor_ime:kor_ime
    }

    return this.http.post(`${this.uri}/starasifra`,data);
  }

  promenisifru(kor_ime,lozinka){

    const data={
      kor_ime:kor_ime,
      lozinka:lozinka
    }


    return this.http.post(`${this.uri}/promenisifru`,data);

  }



  getzaposleni(){



    return this.http.get(`${this.uri}/getzaposleni`);
  }


  getpredmeti(){


    return this.http.get(`${this.uri}/getpredmeti`);
  }


  getodredjenipredmeti(vrsta){

    const data={
      vrsta:vrsta
    }
    return this.http.post(`${this.uri}/getodredjenipredmeti`,data);
  }


  getStudenti(){

    return this.http.get(`${this.uri}/getStudenti`);


  }

  obavestenjefajlovi(sifra,fajl,naslov){

    const data={
      sifra:sifra,
      naslov:naslov,
      fajl:fajl
    }


    return this.http.post(`${this.uri}/obavestenjefajlovi`,data);



  }


  getMaster(){


    return this.http.get(`${this.uri}/getMaster`);
  }


  getStudent(kor_ime){

    const data={
      kor_ime:kor_ime
    }

    return this.http.post(`${this.uri}/getstudent`,data);

  }


  getPredmet(sifra){

    const data={
      sifra:sifra
    }


    return this.http.post(`${this.uri}/getPredmet`,data);
  }


  upload(fd) {
    console.log('servis');
    this.http.post('http://localhost:4000/uploadProfilePicture', fd)
    .subscribe( result => {
      console.log(result)
    });
  }


  getPicture(imee): Observable<Blob>{
    const data={
      image:imee
    }
    return this.http.post('http://localhost:4000/getPicture',data,{ responseType: 'blob' });
  }

  getFile(imee): Observable<Blob>{
    const data={
      image:imee
    }
    return this.http.post('http://localhost:4000/getFile',data,{ responseType: 'blob' });
  }


  ubaciPredmet(sifra, ishod,cilj,espb, tip,font,godina,smer, laboratorija,semestar){


    const data={
      ishod:ishod,
      cilj:cilj,
      espb:espb,
      sifra:sifra,
      izborni:{},
      obavezan: {},
      tip:tip,
      termini: {},
      fontcasova:font,
      nastavnici:{},
      komentar: '',
      godina:godina,
      smer:smer,
      obavestenja:{},
      predavanja:{},
      vezbe :{},
      laboratorija:laboratorija,
      spiskovi:{},
      rokovi:{},
      projekti:{},
      labovi:{},
      aktivan:false,
      semestar:semestar
    }



    return this.http.post(`${this.uri}/ubaciPredmet`,data);

  }


  predaje(sifra,ime){



    const data={
      sifra:sifra,
      ime:ime
    }


    return this.http.post(`${this.uri}/predaje`,data);
  }


  slusa(sifra,ime){



    const data={
      sifra:sifra,
      ime:ime
    }


    return this.http.post(`${this.uri}/slusa`,data);
  }


  ubaciFajl(kor_ime,fajl,vezbe,nastavnik_ime,nastavnik_prezime,datum){

    const data={
      kor_ime:kor_ime,
      fajl:fajl,
      vezbe:vezbe,
      nastavnik:nastavnik_ime,
      nastavnikp:nastavnik_prezime,
      datum:datum
    }
    console.log('ovde');
    console.log(kor_ime);
    console.log(fajl);
    console.log(vezbe);

    return this.http.post(`${this.uri}/ubaciFajl`,data);



  }


  prijavaSpisak(sifra,kor_ime,naziv){

    const data={
      sifra:sifra,
      kor_ime:kor_ime,
      naziv:naziv
    }

    return this.http.post(`${this.uri}/prijavaspisak`,data);

  }

  ubaciFajl2(kor_ime,fajl,opis,nastavnik_ime,nastavnik_prezime,datum){

    const data={
      kor_ime:kor_ime,
      fajl:fajl,
      opis:opis,
      nastavnik:nastavnik_ime,
      nastavnikp:nastavnik_prezime,
      datum:datum
    }
    console.log('ovde');
    console.log(kor_ime);
    console.log(fajl);

    return this.http.post(`${this.uri}/ubaciFajl2`,data);



  }
  ubaciFajl3(kor_ime,fajl,opis,nastavnik_ime,nastavnik_prezime,datum){

    const data={
      kor_ime:kor_ime,
      fajl:fajl,
      opis:opis,
      nastavnik:nastavnik_ime,
      nastavnikp:nastavnik_prezime,
      datum:datum
    }

    return this.http.post(`${this.uri}/ubaciFajl3`,data);



  }


  dodajObavestenje(kor_ime,obavestenje,naslov,datum:Date){


    const data={
      kor_ime:kor_ime,
      naslov:naslov,
      obavestenje:obavestenje,
      datum:datum,
      fajl:[]
    }

    return this.http.post(`${this.uri}/dodajObavestenje`,data);

  }


  dodajTermin(kor_ime,sat,minut){

    const data={
      kor_ime:kor_ime,
      sat:sat,
      minut:minut
    }

    return this.http.post(`${this.uri}/dodajtermin`,data);

  }


  obrisiFajl(sifra,ime){

    const data={
      sifra:sifra,
      ime:ime
    }


    return this.http.post(`${this.uri}/obrisiFajl`,data);


  }

  obrisiObavestenje(sifra,obav){

    const data={
      sifra:sifra,
      obav:obav
    }
    console.log(obav[1]);

    return this.http.post(`${this.uri}/obrisiobav`,data);


  }


  izmeniObavestenje(sifra,naslov,tekst){

    const data={
      sifra:sifra,
      naslov:naslov,
      tekst:tekst
    }


    return this.http.post(`${this.uri}/izmeniObavestenje`,data);


  }

  izmeniZap(kor_ime,adresa,telefon,licnipodaci,kabinet){

    const data={
      kor_ime:kor_ime,
      adresa:adresa,
      telefon:telefon,
      licnipodaci:licnipodaci,
      kabinet:kabinet
    }

    return this.http.post(`${this.uri}/izmeniZap`,data);

  }


  dodajspisak(sifra,naziv,sat,minut,mesto,limit){

    const data={
      sifra:sifra,
      naziv:naziv,
      sat:sat,
      minut:minut,
      mesto:mesto,
      limit:limit,
      studenti:{}
    }

    return this.http.post(`${this.uri}/dodajspisak`,data);


  }

  aktivirajspisak(sifra,ime,sta){

    const data={
      sifra:sifra,
      ime:ime,
      sta:sta
    }


    return this.http.post(`${this.uri}/aktivirajspisak`,data);


  }

  aktiviraj(sifra,act){

    const data={
      sifra:sifra,
      act:act
    }


    return this.http.post(`${this.uri}/aktiviraj`,data);



  }


  adminobavestenje(vrsta,tekst,datum){


    const data={
      vrsta:vrsta,
      tekst:tekst,
      datum:datum
    }


    return this.http.post(`${this.uri}/adminobavestenje`,data);

  }

  getObavestenja(){



    return this.http.get(`${this.uri}/getObavestenja`);
  }


  deleteStudent(kor_ime){

    const data={
      kor_ime:kor_ime
    }

    return this.http.post(`${this.uri}/deleteStudent`,data);

  
  }


  deleteZap(kor_ime){

    const data={
      kor_ime:kor_ime
    }

    return this.http.post(`${this.uri}/deleteZap`,data);

  
  }



  
}
