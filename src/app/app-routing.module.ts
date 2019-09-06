import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostComponent } from './post/post.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
{
path : "",
component : HomeComponent
},
{
  path : "about",
  component : AboutComponent
  },
  {
    path : "Sample post",
    component : PostComponent
  },
  {
      path : "Contact",
      component : ContactComponent
      },
  {
      path : "post",
      component : PostComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
