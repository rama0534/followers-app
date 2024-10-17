import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GitUsersComponent } from './git-users/git-users.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'followers', component: GitUsersComponent},
  {path:'posts', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
