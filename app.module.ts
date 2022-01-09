import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ZaposleniComponent } from './zaposleni/zaposleni.component';
import { StudentComponent } from './student/student.component';
import { NastavnikComponent } from './nastavnik/nastavnik.component';
import { OsobljeComponent } from './osoblje/osoblje.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistracijaComponent } from './registracija/registracija.component';
import { RegistracijazaposlenihComponent } from './registracijazaposlenih/registracijazaposlenih.component';
import { PromenasifreComponent } from './promenasifre/promenasifre.component';
import { ZaposleniinfoComponent } from './zaposleniinfo/zaposleniinfo.component';
import { OsnovnestudijeComponent } from './osnovnestudije/osnovnestudije.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { PredmetComponent } from './predmet/predmet.component';
import { PredmetinfoComponent } from './predmetinfo/predmetinfo.component';
import { PredmetmeterijalComponent } from './predmetmeterijal/predmetmeterijal.component';
import { PredmetPredavanjaComponent } from './predmet-predavanja/predmet-predavanja.component';
import { PredmetVezbeComponent } from './predmet-vezbe/predmet-vezbe.component';
import { PredmetLaboratorijaComponent } from './predmet-laboratorija/predmet-laboratorija.component';
import { ProbaComponent } from './proba/proba.component';
import { UbacipredmetComponent } from './ubacipredmet/ubacipredmet.component';
import { ZaposleniPredmetComponent } from './zaposleni-predmet/zaposleni-predmet.component';
import { ObavestenjeEditComponent } from './obavestenje-edit/obavestenje-edit.component';
import { ZaposleniEditComponent } from './zaposleni-edit/zaposleni-edit.component';
import { PredmetiComponent } from './predmeti/predmeti.component';
import { PredmetProjektiComponent } from './predmet-projekti/predmet-projekti.component';
import { AdminCsvComponent } from './admin-csv/admin-csv.component';
import { DodavanjeObavestenjaComponent } from './dodavanje-obavestenja/dodavanje-obavestenja.component';
import { ObavestenjaComponent } from './obavestenja/obavestenja.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjektiComponent } from './projekti/projekti.component';
import { IstrazivanjaComponent } from './istrazivanja/istrazivanja.component';
import { ProjektiNaukaComponent } from './projekti-nauka/projekti-nauka.component';
import { MasterComponent } from './master/master.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ZaposleniComponent,
    StudentComponent,
    NastavnikComponent,
    OsobljeComponent,
    LoginComponent,
    RegistracijaComponent,
    RegistracijazaposlenihComponent,
    PromenasifreComponent,
    ZaposleniinfoComponent,
    OsnovnestudijeComponent,
    KontaktComponent,
    PredmetComponent,
    PredmetinfoComponent,
    PredmetmeterijalComponent,
    PredmetPredavanjaComponent,
    PredmetVezbeComponent,
    PredmetLaboratorijaComponent,
    ProbaComponent,
    UbacipredmetComponent,
    ZaposleniPredmetComponent,
    ObavestenjeEditComponent,
    ZaposleniEditComponent,
    PredmetiComponent,
    PredmetProjektiComponent,
    AdminCsvComponent,
    DodavanjeObavestenjaComponent,
    ObavestenjaComponent,
    NavbarComponent,
    ProjektiComponent,
    IstrazivanjaComponent,
    ProjektiNaukaComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
