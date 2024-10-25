import { Component } from '@angular/core';
import { MasMotosComponent } from "../mas-motos/mas-motos.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MasMotosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
