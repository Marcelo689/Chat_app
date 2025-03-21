import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Chat App';
  users: any;

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.http.get("http://localhost:5000/api/user").subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    });
  }
}
