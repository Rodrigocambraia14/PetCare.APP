import { Component, OnInit } from '@angular/core';
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
import { MatSnackBar } from '@angular/material/snack-bar';
import { CalendarService } from '../../../services/calendar-service/calendar.service';
import { UpdateDateDialogComponent } from '../../dialogs/update-date-dialog/update-date-dialog.component';
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
export class VaccineCalendarComponent implements OnInit {
  selectedDate: any;
  relevantDates: any[] = [];

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar, private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.calendarService.get().subscribe((res) => {
      this.relevantDates = res;
    }, (err) => {

    });
  }

  onSelect(event:any){
    this.selectedDate= event;

    this.openDialog(this.selectedDate);
  }

  openDialog(date: Date): void {
    const dialogRef = this.dialog.open(DateDialogComponent, {
      width: '400px',
      data: date
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.calendarService.add(result).subscribe((res:any) => {
          this.snackBar.open('Evento criado com sucesso!');
          location.reload();
        }, (err:any) => {
          this.snackBar.open('Erro ao salvar a data, tente novamente mais tarde.');

        });
      }
    });
  }

  openUpdateDialog(date: any): void {
    const dialogRef = this.dialog.open(UpdateDateDialogComponent, {
      width: '400px',
      data: date
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.calendarService.update(result).subscribe((res:any) => {
          this.snackBar.open('Evento atualizado com sucesso!');
          location.reload();
        }, (err:any) => {
          this.snackBar.open('Erro ao atualizar o evento, tente novamente mais tarde.');

        });
      }
    });
  }
}
