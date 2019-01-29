import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { CardProgrammeComponent } from './card-programme/card-programme.component';
import { EntrainementComponent } from './entrainement/entrainement.component';
import { CardExerciceComponent } from './card-exercice/card-exercice.component';
import { BtnAddExerciceComponent } from './btn-add-exercice/btn-add-exercice.component';
import { BtnAddEntrainementComponent } from './btn-add-entrainement/btn-add-entrainement.component';
import { BtnAddProgrammeComponent } from './btn-add-programme/btn-add-programme.component';
import { Routes, RouterModule } from '@angular/router';
import { SeancesViewComponent } from './seances-view/seances-view.component';
import { SerieComponent } from './serie/serie.component';
import { SeanceComponent } from './seance/seance.component';
import { BtnAddSerieComponent } from './btn-add-serie/btn-add-serie.component';
import { ProgrammesViewComponent } from './programmes-view/programmes-view.component';
import { BtnAddSeanceComponent } from './btn-add-seance/btn-add-seance.component';
import { ModalAddNameComponent } from './modal-add-name/modal-add-name.component';
import { ModalAddSeanceComponent } from './modal-add-seance/modal-add-seance.component';
import { ModalAddSerieComponent } from './modal-add-serie/modal-add-serie.component';

import { DonneesAppService } from './services/donnees-app.service';



const appRoutes: Routes = [
  { path: 'seancesView/:id', component: SeancesViewComponent },
  { path: '', component: ProgrammesViewComponent }
];

@NgModule({
  entryComponents: [ModalAddNameComponent, ModalAddSeanceComponent, ModalAddSerieComponent],
  declarations: [
    AppComponent,
    CardProgrammeComponent,
    EntrainementComponent,
    CardExerciceComponent,
    BtnAddExerciceComponent,
    BtnAddEntrainementComponent,
    BtnAddProgrammeComponent,
    SeancesViewComponent,
    SerieComponent,
    SeanceComponent,
    BtnAddSerieComponent,
    ProgrammesViewComponent,
    BtnAddSeanceComponent,
    ModalAddNameComponent,
    ModalAddSeanceComponent,
    ModalAddSerieComponent,
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule,
    FormsModule
  ],
  providers: [DonneesAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
