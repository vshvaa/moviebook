import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from './Movies';
import { Tickets } from './Tickets';

@Injectable({
  providedIn: 'root'
})
export class TicketBookingService {

  private url='https://localhost:7083/api/v1/moviebooking';
  constructor(private httpClient:HttpClient) { }
  bookTickets(movie:Movies,nofoTickets:any){
    return this.httpClient.post(this.url+'/'+movie.movieName+'/add/'+nofoTickets,{ responseType: 'text' })
  }
}
