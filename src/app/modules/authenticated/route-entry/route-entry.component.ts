import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-route-entry',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './route-entry.component.html',
  styleUrls: ['./route-entry.component.css'],
})
export class RouteEntryComponent {}
