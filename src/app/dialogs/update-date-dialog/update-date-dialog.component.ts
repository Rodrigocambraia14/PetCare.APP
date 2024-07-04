import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-update-date-dialog',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule,MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,],
  templateUrl: './update-date-dialog.component.html',
  styleUrl: './update-date-dialog.component.scss'
})
export class UpdateDateDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<UpdateDateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onSave(): void {
    this.dialogRef.close(this.data);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}