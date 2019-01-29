import { Component, OnInit, Input } from '@angular/core';

import{ Serie } from '../models/serie';

import { DonneesAppService } from '../services/donnees-app.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit {

  @Input() serie: Serie;

  id: number;
  rep: number;
  charge: number;
  ordre: number;
  idSeance: number;

  constructor(private donneesAppService: DonneesAppService) { }

  ngOnInit() {
    this.id = this.serie.id;
    this.ordre = this.serie.ordre;
    this.rep = this.serie.rep;
    this.charge = this.serie.charge;
    this.idSeance = this.serie.idSeance;

  }

}
