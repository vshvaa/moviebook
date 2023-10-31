import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { MoviesService } from '../movies.service';
import { Tickets } from '../Tickets';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {

  totalSeats:number=0
  output!:number
  ticket:Tickets[]=[];
  seatNumber:string[]=[];
  constructor(private service:MoviesService, private aservice:BackendService) { }
  movie=this.service.movie
  status:boolean=this.aservice.adminStatus
  ngOnInit(): void {
    this.movieDetails(this.movie.movieName, this.movie.theatreName);
  }
  movieDetails(movieName:string, theatreName:string){
    this.service.movieDetails(movieName,theatreName).subscribe(data=>{
      this.ticket=data
      console.log(this.ticket);
      this.totalSeats=this.movie.totalNumberOfTickets;
      console.log(this.totalSeats);
      this.extractSeat();
    })   
  }
  extractSeat(){
    this.seatNumber= this.ticket.flatMap(ticket=>ticket.seatNumber);
  }
}
