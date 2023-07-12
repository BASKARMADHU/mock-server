import { Component ,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieApiService } from '../service/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  trendingMovieResult: any = [];
  actionMovieResult: any =[];

  constructor (private http:HttpClient,private service:MovieApiService){
  }

    ngOnInit(): void {
      this.trendingData();
      this.actionMovie();
    }


  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMovieResult = result.results;
    });
  }

  // action 
  actionMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      this.actionMovieResult = result.results;
    });
  }




}
