import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PracticeAreasComponent } from './components/practice-areas/practice-areas.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { AttorneysComponent } from './components/attorneys/attorneys.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogSingleComponent } from './components/blog/blog-single/blog-single.component';
import { PracticeSingleComponent } from './components/practice-areas/practice-single/practice-single.component';
import { ContactComponent } from './components/contact/contact.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AboutusComponent,
    PracticeAreasComponent,
    NewsletterComponent,
    AttorneysComponent,
    BlogComponent,
    BlogSingleComponent,
    PracticeSingleComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
