import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { AuthService } from '../services/auth-service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent, CommonModule      ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [AuthService]
})
export class AppComponent {

  constructor(public authService: AuthService) {}

  title = 'angular-docker';
}
