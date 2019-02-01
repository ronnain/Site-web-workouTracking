import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import{ Seance} from '../models/seance';

import { DonneesAppService } from '../services/donnees-app.service';

@Component({
  selector: 'app-seances-view',
  templateUrl: './seances-view.component.html',
  styleUrls: ['./seances-view.component.scss']
})
export class SeancesViewComponent implements OnInit {

  idExercice: number;
  seances:Seance[];

  constructor(private route: ActivatedRoute,
  private donneesAppService: DonneesAppService,
  private location: Location) { }

  ngOnInit(): void {
    this.getSeances();
  }

  getSeances(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.idExercice = id;
    //this.seances = this.donneesAppService.getSeancesByIdExercice(id);
    this.donneesAppService.getSeancesByIdExercice(this.idExercice)
      .subscribe(seances => this.seances = seances);
    //console.log(this.seances);
  }

}
