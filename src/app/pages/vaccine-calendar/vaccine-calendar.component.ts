import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { DateDialogComponent } from '../../dialogs/date-dialog/date-dialog.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-vaccine-calendar',
  standalone: true,
  imports: [ MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule],
  templateUrl: './vaccine-calendar.component.html',
  styleUrl: './vaccine-calendar.component.scss'
})
export class VaccineCalendarComponent {
  selectedDate: Date | null = null;
  relevantDates: Date[] = [new Date(2023, 6, 4), new Date(2023, 6, 12)];
  descriptions: { [key: string]: string } = {
    '2023-07-04': 'First Dose',
    '2023-07-12': 'Second Dose'
  };

  constructor(public dialog: MatDialog) {}

  dateSelected(event: MatDatepickerInputEvent<Date>) {
    const date = event.value;
    if (date) {
      this.openDialog(date);
    }
  }

  getDescription(date: Date): string {
    const key = date.toISOString().split('T')[0];
    return this.descriptions[key] || '';
  }

  openDialog(date: Date): void {
    const dialogRef = this.dialog.open(DateDialogComponent, {
      width: '250px',
      data: { date, description: this.getDescription(date) }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const key = date.toISOString().split('T')[0];
        this.descriptions[key] = result;
        if (!this.relevantDates.some(d => d.toISOString() === date.toISOString())) {
          this.relevantDates.push(date);
        }
      }
    });
  }
}
