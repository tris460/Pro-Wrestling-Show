import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { WelcomeComponent } from './components/welcome.component';
import { GalleryComponent } from './components/gallery.component';
import { NewsComponent } from './components/news.component';
import { FightersComponent } from './components/fighters.component';
import { FooterComponent } from './components/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    GalleryComponent,
    NewsComponent,
    FightersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
