import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { StoriesComponent } from './components/stories/stories.component';
import { PostsComponent } from './components/posts/posts.component';
import { StoryComponent } from './components/story/story.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    PostsComponent,
    StoryComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
