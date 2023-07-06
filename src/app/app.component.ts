import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mock-server';
  details: any;
  datas: any;
  //  details : any;

  constructor(private http: HttpClient){
  }

  ngOnInit(): void{
    this.http.get('http://localhost:3000/api/users').subscribe((response) => {
        this.details = response;
        this.datas = this.details.data.users
        console.log(this.datas);

      });
  }}
