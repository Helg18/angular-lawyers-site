import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {AboutusComponent} from './components/aboutus/aboutus.component';
import {PracticeAreasComponent} from './components/practice-areas/practice-areas.component';
import {PracticeSingleComponent} from './components/practice-areas/practice-single/practice-single.component';
import {AttorneysComponent} from './components/attorneys/attorneys.component';
import {BlogComponent} from './components/blog/blog.component';
import {BlogSingleComponent} from './components/blog/blog-single/blog-single.component';
import {ContactComponent} from './components/contact/contact.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'about-us', component: AboutusComponent},
  {path: 'practice-areas', component: PracticeAreasComponent},
  {path: 'practice-areas/single', component: PracticeSingleComponent},
  {path: 'attorneys', component: AttorneysComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog/single', component: BlogSingleComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', component: MainComponent, pathMatch:  'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
