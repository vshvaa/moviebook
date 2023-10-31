import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { User } from './User';
import { catchError, Observable } from 'rxjs';
import { ForgotPassword } from './ForgotPassword';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  adminStatus:boolean=false
  status:boolean=false
  user!:User;
  private url='https://localhost:7083/api/v1/moviebooking';

  constructor(private httpClient:HttpClient) { }

  authenticate(loginId:string, password:string):Observable<any>{
     return this.httpClient.get<any>(this.url+'/login?LoginId='+loginId+'&Password='+password);
  }

  addUser(user:User):Observable<any>{
    return this.httpClient.post<any>(this.url+'/register',user);
  }
  changePassword(loginId:string,forgotPassword:ForgotPassword):Observable<any>{
    return this.httpClient.put(this.url+"/"+loginId+'/forgetpassword',forgotPassword, { responseType: 'text' });
  }
}
