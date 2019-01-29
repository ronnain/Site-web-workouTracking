import { Component, Input, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-modal-add-name',
  templateUrl: './modal-add-name.component.html',
  styleUrls: ['./modal-add-name.component.scss']
})
export class ModalAddNameComponent {

  constructor(public dialogRef: MatDialogRef<ModalAddNameComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
