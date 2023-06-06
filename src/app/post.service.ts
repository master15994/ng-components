import { Injectable } from '@angular/core';
import { Post } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: Post[] = [];

  addPost(post: Post) {
    this.posts.push(post);
  }

  constructor() {}
}
