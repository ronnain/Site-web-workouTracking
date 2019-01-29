import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalAddNameComponent } from '../modal-add-name/modal-add-name.component';

@Component({
  selector: 'app-btn-add-exercice',
  templateUrl: './btn-add-exercice.component.html',
  styleUrls: ['./btn-add-exercice.component.scss']
})
export class BtnAddExerciceComponent implements OnInit {

  name:string = "exercice";

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalAddNameComponent, {
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
