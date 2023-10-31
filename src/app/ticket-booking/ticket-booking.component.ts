import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from '../Movies';
import { MoviesService } from '../movies.service';
import { TicketBookingService } from '../ticket-booking.service';
import { Tickets } from '../Tickets';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit {

  status: boolean = false
  message:any;
  isLoggedIn:boolean =true;
  seatNumber:string[]=[];
  ticket:Tickets[]=[];
  form: any = {
    noOfTickets: null
  };
  constructor(private mservice: MoviesService, private service: TicketBookingService, private route: Router) { }
  movie: Movies = this.mservice.movie
  booking() {
    if (this.form.noOfTickets != 0) {
      console.log(this.form.noOfTickets,this.movie);
      this.service.bookTickets(this.movie, this.form.noOfTickets).subscribe(data => {
        this.message = data
        console.log(this.message);
        console.log(this.message.response);
        this.seatNumber = this.message.response.seatNumber.join(',');
       console.log(this.seatNumber);
       this.status = true
      })
    }
  }

  cancel() {
    this.route.navigate(['movieslist'])
  }
  ngOnInit(): void {
  }

}
