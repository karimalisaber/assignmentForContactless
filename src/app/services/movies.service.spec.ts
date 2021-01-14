import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { from, of } from 'rxjs';
import { CategoredMovies } from '../models/movies';

import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });

    service = TestBed.inject(MoviesService);
    httpMock = TestBed.inject(HttpTestingController)

  });

  afterEach(()=>{
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should Retrieve Movies From the Api Via GET', () => {
    service.movies$.subscribe(movies=>{
      expect(movies.length) .toBeTruthy();
    });

    const request = httpMock.expectOne(`${service.baseUrl}`)
    expect(request.request.method).toBe('GET');
  });

  it('Should Retrieve Categored Movies From Movie, mean map movies to categoried movies', () => {
    service.categoredMovies$.subscribe(movies=>{
      movies.forEach((CategoredMovies)=>{
        expect(CategoredMovies.category).toBeInstanceOf(String)
        expect(CategoredMovies.movies).toBeInstanceOf(Array)
        
      })
    });
    
    const request = httpMock.expectOne(`${service.baseUrl}`)
    expect(request.request.method).toBe('GET');
  });


  it('Should Retrieve specificMovie From Movies', () => {    
    spyOnProperty(service, 'movies$').and.returnValue(
      of([
        {
          backdrop: '',
          cast:[],
          classification: '',
          director: '',
          genres: [],
          id: 10,
          imdb_rating: 0,
          length: '',
          overview: '',
          poster: '',
          released_on: '',
          slug: '',
          title: ''
        }
      ])
    )

    service.getSpecificMovie(10).subscribe(movie=>{
      expect(movie.id).toBeGreaterThan(-1);
    })
  });


});
