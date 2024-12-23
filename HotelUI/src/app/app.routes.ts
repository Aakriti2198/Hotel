import { Routes } from '@angular/router';
import { HotelDataComponent } from './view/hotel-data/hotel-data.component';
import { SpecificHotelDataComponent } from './view/specific-hotel-data/specific-hotel-data.component';

export const routes: Routes = [
    { path: '', redirectTo: '/hotelData', pathMatch:'full' },
    { path: 'hotelData', component: HotelDataComponent },
    { path: 'SHotelData', component:SpecificHotelDataComponent},
    {path: '**', redirectTo: "hotelData"  }
];
