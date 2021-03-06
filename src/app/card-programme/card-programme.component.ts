import { Component, OnInit, Input } from '@angular/core';
import { DonneesAppService } from '../services/donnees-app.service';
import{ Programme } from '../models/programme';
import{ Entrainement } from '../models/entrainement';

@Component({
  selector: 'app-card-programme',
  templateUrl: './card-programme.component.html',
  styleUrls: ['./card-programme.component.scss']
})
export class CardProgrammeComponent implements OnInit {
  @Input() programme: Programme;

  id:number;
  nom:string;
  ordre:number;
  entrainements: Entrainement[];


  constructor(private donneesAppService: DonneesAppService) { }

  ngOnInit() {
    this.id = this.programme.id;
    this.nom = this.programme.nom;
    //this.entrainements = this.donneesAppService.getEntrainementsByIdProgramme(this.id);
    this.donneesAppService.getEntrainementsByIdProgramme(this.id)
      .subscribe(entrainements => this.entrainements = entrainements);
    //console.log("JSON programme : " + JSON.parse(this.programme));
    //console.log("programme : " + JSON.stringify(this.programme));
    //console.log(this.entrainements);
  }

}
