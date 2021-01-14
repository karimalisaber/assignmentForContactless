import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../services/movies.service';
import { CategoredMovies, Movie } from '../../models/movies';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import {debounceTime, map, switchMap} from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(public moviesService: MoviesService) { }

  ngOnInit(): void {   
  }

}
