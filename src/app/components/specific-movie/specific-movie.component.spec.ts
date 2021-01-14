import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, RouterModule, convertToParamMap  } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

import { SpecificMovieComponent } from './specific-movie.component';

const fakeActivatedRoute = {
  snapshot: {
    queryParamMap : {
      id :  '123'
      
    }
  }

 };

describe('SpecificMovieComponent', () => {
  let component: SpecificMovieComponent;
  let fixture: ComponentFixture<SpecificMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificMovieComponent ],
      imports:[HttpClientModule],
      providers:[MoviesService, 
        {
          provide: ActivatedRoute, useValue:
              { snapshot: { paramMap: convertToParamMap( { 'id': '99-88-77' } ) } }
      }
      
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have movie id', () => {
    let id = component.id;
    expect(id).toBeTruthy();
  });
});
