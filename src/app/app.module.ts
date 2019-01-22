import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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


const appRoutes: Routes = [
  { path: 'seancesView', component: SeancesViewComponent },
  { path: '', component: CardProgrammeComponent }
];

@NgModule({
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
    BtnAddSerieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
