import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mock-server';

  //  details : any;

  constructor(private http: HttpClient){
  }

  ngOnInit(): void{
    this.http.get('http://localhost:3000/api/users').subscribe((response) => {
        console.log(response);
        // this.details = response;
      });
  }
}
