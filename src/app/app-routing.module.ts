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
  {path: 'angular-lawyers-site', component: MainComponent},
  {path: 'angular-lawyers-site/about-us', component: AboutusComponent},
  {path: 'angular-lawyers-site/practice-areas', component: PracticeAreasComponent},
  {path: 'angular-lawyers-site/practice-areas/single', component: PracticeSingleComponent},
  {path: 'angular-lawyers-site/attorneys', component: AttorneysComponent},
  {path: 'angular-lawyers-site/blog', component: BlogComponent},
  {path: 'angular-lawyers-site/blog/single', component: BlogSingleComponent},
  {path: 'angular-lawyers-site/contact', component: ContactComponent},
  {path: 'angular-lawyers-site', component: MainComponent, pathMatch:  'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
