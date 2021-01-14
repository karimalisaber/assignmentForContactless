import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
import { CategoredMovies, Movie, Movies } from '../models/movies';
import { debounceTime, finalize, map, switchMap, tap, shareReplay, catchError } from 'rxjs/operators';
import { LayoutService } from './layout.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl = 'https://wookie.codesubmit.io/movies?q=';  
  searchText = '';
  private movieSearchSubject = new BehaviorSubject <string>('');
  movieSearchAction = this.movieSearchSubject.asObservable().pipe(debounceTime(500));  
  
  categoredMovies$ : Observable< CategoredMovies[]> = combineLatest([this.movies$,this.movieSearchAction])
    .pipe(map(([categoriedMovies, searchText])=>{
      this.searchText = searchText;
      return categoriedMovies;
    })
    ,catchError(this.handleGetMoviesError)
    ,switchMap(res=> {
      return this.movies$.pipe(
        map(categoriedMovies=>{
        let categories = this.getAllCategories(categoriedMovies ) 
        let categoriedMovies$ = this.setMoviesInCategories(categoriedMovies, categories);  
        return categoriedMovies$
      }),catchError(this.handleGetMoviesError));
  }));

  
  get movies$() : Observable<Movie[]> {
   return this.http.get(this.baseUrl + this.searchText).pipe(

    tap(()=>this.layoutService.blockUI(true)),
    finalize(()=>this.layoutService.blockUI(false)), 
    
    map((res:any) => {
       res.movies.forEach(movie=>{
         movie.imdb_rating_Array = Array(Math.round(+movie.imdb_rating /  2)).fill('').map((res,i) => res = {status: true, value : i+1}) ;
         for(let i = movie.imdb_rating_Array.length ; i < 5; i++){
          movie.imdb_rating_Array.push({status: false, value: null})
         };
       })
        return res.movies
    },catchError(this.handleGetMoviesError))
    );
  }

  handleGetMoviesError(){
      return of([]) // or empty, using catch and replaceStrategy, and no data found will retrieved
  }

  constructor(private http: HttpClient, private layoutService: LayoutService) {}

  private getAllCategories(movies:  Movie[]) : Array<string>{
    var categories = [];
 
    movies.forEach(movie=>{ // flattering categories into an array
      categories.push(...movie.genres);
    });

    categories = [...new Set(categories)] // get unique categories
    
    return categories;
  }

  private setMoviesInCategories(movies:  Movie[], categories: string[]): CategoredMovies[]{
   const categoredMovies : Array<CategoredMovies> = []

    categories.forEach(category=>{
      let moviesInCategory = movies.filter(res=>res.genres.find(res=> res === category) )
      if(moviesInCategory && moviesInCategory.length)
      categoredMovies.push({category, movies: moviesInCategory})
    });

    return categoredMovies;
  }
  
  filterMovies(searchText: any) {  
    this.movieSearchSubject.next(searchText)
  }

  // : Observable<Movie>
  getSpecificMovie(id): Observable<Movie>{
    return this.movies$.pipe(map(res=> res.find(res=>res.id ===id)))
  }
}
