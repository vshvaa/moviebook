import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from './Movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  movie!:Movies
  movieName:string=''
  private url='https://localhost:7083/api/v1/moviebooking';
  constructor(private httpClient:HttpClient) { }

  getAllMovies():Observable<any[]>{
    return this.httpClient.get<any[]>(this.url+'/all')

  }
  getMovies(movieName:string):Observable<Movies[]>{
    return this.httpClient.get<Movies[]>(this.url+'/search/'+movieName)
  }

  deleteMovie(movieName:string, theatreName:string){
    return this.httpClient.delete(this.url+'/'+movieName+'/delete/'+theatreName,{ responseType: 'text' })
  }

  movieDetails(movieName:string, theatreName:string):Observable<any>{
    return this.httpClient.get<any>(this.url+'/moviebooking/bookedtickets?movieName='+movieName+'&theaterName='+theatreName)
  }
}
