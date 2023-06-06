import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Post } from '../app.component';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  constructor(private postService: PostService) {}

  @ViewChild('titlefocus', { static: false })
  inputRef!: ElementRef;

  @ViewChild('textfocus', { static: false }) inputRefs!: ElementRef;

  title = '';
  text = '';

  ngOnInit(): void {}

  addPost() {
    if (this.text.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
      };

      this.postService.addPost(post);

      console.log('New post', post);
      this.text = this.title = '';
    }
  }

  focusTitle() {
    this.inputRef.nativeElement.focus();
  }

  focusText() {
    this.inputRefs.nativeElement.focus();
  }
}
