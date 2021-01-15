import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
export class SpecificMovieComponent implements OnInit {
  id: string = this.route.snapshot.paramMap.get('id');
  movie$: Observable<Movie>; ;
  constructor(private route: ActivatedRoute, public moviesService: MoviesService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.movie$ =  this.moviesService.getSpecificMovie(this.id)
  }
}
