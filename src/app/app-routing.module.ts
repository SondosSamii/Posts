import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  {path: "", redirectTo:"Home", pathMatch:"full"},
  {path: "Home", component:HomeComponent},
  {path: "Post/:id", component:PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
