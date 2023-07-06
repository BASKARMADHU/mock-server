import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mock-server';

  constructor(private http: HttpClient){}

  ngOnInit(){
      this.http.get('http://localhost:3000/api/users').subscribe((data) => {
        console.log(data);
      })
  }
}
