import { Component } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  constructor(private location: Location) {
  }
  back() {
    this.location.back();
  }
}
