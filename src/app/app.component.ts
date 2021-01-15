import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MoviesService } from './services/movies.service';
import { LayoutService } from './services/layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(private moviesService: MoviesService, public layoutService: LayoutService, private router: Router) { }

  
  filter(searchText){
    this.moviesService.filterMovies(searchText);
    this.router.navigate(['/']);
  }
}
