import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isVisible = true;

  posts: Post[] = [
    { title: 'Post 1', text: 'Text 1', id: 1 },
    { title: 'Post 2  ', text: 'Text 2 about new technology', id: 2 },
    { title: 'Post 3', text: 'Text 3', id: 3 },
  ];

  updatePost(post: Post) {
    this.posts.unshift(post);
  }
}
