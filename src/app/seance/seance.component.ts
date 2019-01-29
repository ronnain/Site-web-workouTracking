import { Component, OnInit, Input } from '@angular/core';

import{ Seance} from '../models/seance';
import{ Serie} from '../models/serie';

import { DonneesAppService } from '../services/donnees-app.service';

@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.scss']
})
export class SeanceComponent implements OnInit {

  @Input() seance: Seance;

  id: number;
  ordre: number;
  intensite: number;
  commentaire: string;
  idExercice: number;
  series: Serie[];


  constructor(private donneesAppService: DonneesAppService) { }

  ngOnInit() {
    this.id = this.seance.id;
    this.ordre = this.seance.ordre;
    this.intensite = this.seance.intensite;
    this.commentaire = this.seance.commentaire;
    this.idExercice = this.seance.idExercice;
    this.series = this.donneesAppService.getSeriesByIdSeance(this.id);
    console.log(this.series);
  }

}
