import { Component,OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ApicallService } from "./../../services/apicall.service";

@Component({
  selector: 'app-hotel-data',
  imports: [TableModule, ButtonModule, CommonModule],
  templateUrl: './hotel-data.component.html',
  styleUrl: './hotel-data.component.scss',
  providers:[MessageService]
})
export class HotelDataComponent implements OnInit {
  hotelData: any[]=[];
  expandedRows = {};


  constructor( private router: Router,private api: ApicallService) {}
  ngOnInit() {
    this.api.GetApi(`api/hotels`).subscribe((resp: any) => {
      if(resp.responseCode == 200){
       this.hotelData=resp.responseData
      }
      else{
        console.log("Error Code:"+resp.responseCode+" "+"Error Message:"+resp.responseMessage)
      }
    })
  }

  goToDetails(event: any) {
    const Hotelid = event.id
    localStorage.setItem('id', Hotelid );
    this.router.navigate(['/SHotelData']);
  }









}
