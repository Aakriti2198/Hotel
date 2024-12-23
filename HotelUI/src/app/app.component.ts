import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'HotelUI';
  isLoading = true;
  constructor() {}

  ngOnInit(): void {
    debugger
    setTimeout(() => {
      this.isLoading = false;
    }, 2000); 
  }
 
}
