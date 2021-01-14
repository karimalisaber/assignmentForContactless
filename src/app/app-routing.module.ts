import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SpecificMovieComponent } from './components/specific-movie/specific-movie.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'specific-movie/:id', component: SpecificMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
