import { Component } from '@angular/core';
import { SecBodyComponent } from './sec-body/sec-body.component';

@Component({
  selector: 'app-main-body',
  standalone: true,
  imports: [SecBodyComponent],
  templateUrl: './main-body.component.html',
  styleUrl: './main-body.component.scss',
})
export class MainBodyComponent {}
