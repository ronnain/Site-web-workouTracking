import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalAddSerieComponent } from '../modal-add-serie/modal-add-serie.component';

@Component({
  selector: 'app-btn-add-serie',
  templateUrl: './btn-add-serie.component.html',
  styleUrls: ['./btn-add-serie.component.scss']
})
export class BtnAddSerieComponent implements OnInit {

  name:string = "séance";

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalAddSerieComponent, {
      width: '250px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  ngOnInit() {
  }

}
