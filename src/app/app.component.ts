import { Component } from '@angular/core';
import { BackendService } from './backend.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moviebookingapp';
  status:boolean=false
  isAuthenticated!: boolean;
  constructor( private service:BackendService,private route:Router){}
  
  logout(){
    this.isAuthenticated = true;  
    this.service.status=false
    this.service.adminStatus=false
    this.status=false
    this.route.navigate(['/']);
  }
}
