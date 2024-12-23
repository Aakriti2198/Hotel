import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ApicallService } from "./../../services/apicall.service";

@Component({
  selector: 'app-specific-hotel-data',
  imports: [CardModule,TableModule,CommonModule],
  templateUrl: './specific-hotel-data.component.html',
  styleUrl: './specific-hotel-data.component.scss'
})
export class SpecificHotelDataComponent implements OnInit {


  SHotelData: any;
 
  constructor(private route: ActivatedRoute,private api: ApicallService,private router: Router) {}

  ngOnInit() {
    const eventId = localStorage.getItem('id');
    if (eventId) {

       // If an event ID exists, make an API call to get hotel data
      this.api.GetApi(`api/hotels/`+eventId).subscribe((resp: any) => {
        if(resp.responseCode == 200){
          this.SHotelData=resp.responseData;
        }
        else {
          // If the response code is not 200, show an alert with an error message
          console.log("Error Code:"+resp.responseCode+" "+"Error Message:"+resp.responseMessage)
          this.router.navigate(['/hotelData']);  // Redirect to list page
        }
      })
    }
    else{
      this.router.navigate(['/hotelData']);
    }
   
    }

  }

