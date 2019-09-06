import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { BannerComponent } from './banner/banner.component';
import { ContentComponent } from './content/content.component';
import { BelowComponent } from './below/below.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    BannerComponent,
    ContentComponent,
    BelowComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
