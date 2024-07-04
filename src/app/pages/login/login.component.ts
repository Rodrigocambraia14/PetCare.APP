import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth-service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatCardModule, CommonModule, MatFormFieldModule,  MatInputModule, MatButtonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  constructor(public authService: AuthService, private snackBar: MatSnackBar, private router: Router) {}

error: string = '';
form: FormGroup = new FormGroup({
  username: new FormControl(''),
  password: new FormControl(''),
});

  ngOnInit(): void {
    localStorage.clear();
  }

 

  async submit() {
    if (this.form.valid) {
      await this.authService.login(this.form.value.username, this.form.value.password).subscribe((res: any) => {
        localStorage.setItem('userId', res);
        this.router.navigate(['/home']);
      },(err: any) =>{
        this.snackBar.open('Credenciais inválidas!');
      });
    }
  }
}
