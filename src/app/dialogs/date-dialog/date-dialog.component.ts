import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-date-dialog',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule],
  templateUrl: './date-dialog.component.html',
  styleUrl: './date-dialog.component.scss'
})
export class DateDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { date: Date, description: string }
  ) {}

  onSave(): void {
    this.dialogRef.close(this.data.description);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}