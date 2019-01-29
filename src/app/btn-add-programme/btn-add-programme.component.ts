import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalAddNameComponent } from '../modal-add-name/modal-add-name.component';

@Component({
  selector: 'app-btn-add-programme',
  templateUrl: './btn-add-programme.component.html',
  styleUrls: ['./btn-add-programme.component.scss']
})
export class BtnAddProgrammeComponent implements OnInit {

  name:string = "programme";

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
/*
@Component({
  selector: 'dialog-add-programme',
  templateUrl: 'dialog-add-programme.html',
})
export class DialogAddProgramme {

  constructor(public dialogRef: MatDialogRef<DialogAddProgramme>){}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
*/
