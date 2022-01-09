import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { combineLatest } from 'rxjs';
import { AdminCsvComponent } from './admin-csv/admin-csv.component';
import { AdminComponent } from './admin/admin.component';
import { IstrazivanjaComponent } from './istrazivanja/istrazivanja.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { LoginComponent } from './login/login.component';
import { MasterComponent } from './master/master.component';
import { NastavnikComponent } from './nastavnik/nastavnik.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ObavestenjaComponent } from './obavestenja/obavestenja.component';
import { ObavestenjeEditComponent } from './obavestenje-edit/obavestenje-edit.component';
import { OsnovnestudijeComponent } from './osnovnestudije/osnovnestudije.component';
import { OsobljeComponent } from './osoblje/osoblje.component';
import { PredmetLaboratorijaComponent } from './predmet-laboratorija/predmet-laboratorija.component';
import { PredmetPredavanjaComponent } from './predmet-predavanja/predmet-predavanja.component';
import { PredmetProjektiComponent } from './predmet-projekti/predmet-projekti.component';
import { PredmetVezbeComponent } from './predmet-vezbe/predmet-vezbe.component';
import { PredmetComponent } from './predmet/predmet.component';
import { PredmetiComponent } from './predmeti/predmeti.component';
import { PredmetinfoComponent } from './predmetinfo/predmetinfo.component';
import { PredmetmeterijalComponent } from './predmetmeterijal/predmetmeterijal.component';
import { ProbaComponent } from './proba/proba.component';
import { ProjektiNaukaComponent } from './projekti-nauka/projekti-nauka.component';
import { ProjektiComponent } from './projekti/projekti.component';
import { PromenasifreComponent } from './promenasifre/promenasifre.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { RegistracijazaposlenihComponent } from './registracijazaposlenih/registracijazaposlenih.component';
import { StudentComponent } from './student/student.component';
import { UbacipredmetComponent } from './ubacipredmet/ubacipredmet.component';
import { ZaposleniEditComponent } from './zaposleni-edit/zaposleni-edit.component';
import { ZaposleniPredmetComponent } from './zaposleni-predmet/zaposleni-predmet.component';
import { ZaposleniComponent } from './zaposleni/zaposleni.component';
import { ZaposleniinfoComponent } from './zaposleniinfo/zaposleniinfo.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'admin' , component:AdminComponent},
  {path:'nastavnik',component:NastavnikComponent},
  {path:'osoblje',component:OsobljeComponent},
  {path:'student',component:StudentComponent},
  {path:'registracija',component:RegistracijaComponent},
  {path:'registracijazaposlenih',component:RegistracijazaposlenihComponent},
  {path:'promenasifre',component:PromenasifreComponent},
  {path:'zaposleni',component:ZaposleniComponent},
  {path:'zaposleni-info',component:ZaposleniinfoComponent},
  {path:'osnovne-studije',component:OsnovnestudijeComponent},
  {path:'kontakt',component:KontaktComponent},
  {path:'predmet-info',component:PredmetinfoComponent},
  {path:'proba',component:ProbaComponent},
  {path:'dodajPredmet',component:UbacipredmetComponent },
  {path:'zaposleni-predmet',component:ZaposleniPredmetComponent},
  {path:'predmet-vezbe',component:PredmetVezbeComponent},
  {path:'predmet-predavanja',component:PredmetPredavanjaComponent},
  {path:'obavestenje-edit',component:ObavestenjeEditComponent},
  {path:'zaposleni-edit',component:ZaposleniEditComponent},
  {path:'svipredmeti',component:PredmetiComponent},
  {path:'predmet',component:PredmetComponent},
  {path:'predmet-ispiti',component:PredmetmeterijalComponent},
  {path:'predmet-laboratorija',component:PredmetLaboratorijaComponent},
  {path:'predmet-projekti',component:PredmetProjektiComponent},
  {path:'admin-csv',component:AdminCsvComponent},
  {path:'obavestenja',component:ObavestenjaComponent},
  {path:'nav',component:NavbarComponent},
  {path:'projekti',component:ProjektiComponent},
  {path:'istrazivanja',component:IstrazivanjaComponent},
  {path:'projekti-nauka',component:ProjektiNaukaComponent},
  {path:'master',component:MasterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
