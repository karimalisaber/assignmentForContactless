import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MoviesService } from './services/movies.service';
import { LayoutService } from './services/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private moviesService: MoviesService, public layoutService: LayoutService) { }

  
  filter(searchText){
    this.moviesService.filterMovies(searchText)   
  }
}
