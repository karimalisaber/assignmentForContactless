import { ChangeDetectionStrategy, Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movies';

@Component({
  selector: 'app-specific-movie',
  templateUrl: './specific-movie.component.html',
  styleUrls: ['./specific-movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpecificMovieComponent {
  id: string = this.route.snapshot.paramMap.get('id');
  movie$: Observable<Movie> = this.moviesService.getSpecificMovie(this.id);
  constructor(private route: ActivatedRoute, public moviesService: MoviesService){}
}
