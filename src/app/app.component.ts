import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';

export interface Humans {
  name: string;
  job: string;
  age: number;
}

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
export class AppComponent implements OnInit {
  formGroup = new FormGroup({
    name: new FormControl(null),
    surname: new FormControl(null),
    check: new FormControl(false),
  });

  ngOnInit(): void {
    this.formGroup.valueChanges
      .pipe(debounceTime(400))
      .subscribe((res) => console.log(res));
  }

  sumbit() {
    console.log(this.formGroup.value);
  }
}
//   human: Humans[] = [
//     { name: 'Alex', job: 'teacher', age: 52 },
//     { name: 'Kate', job: 'head-master', age: 21 },
//     { name: 'Pat', job: 'it-manager', age: 25 },
//   ];
// }
// }

//   e: number = Math.E;

//   str = 'need to buy a lot of stars';

//   date: Date = new Date();

//   float = 9.55;

//   name = [
//     { post1: 'coount', id: 2 },
//     { post1: 'coount', id: 3 },
//     { post1: 'coount', id: 3 },
//     {
//       post: {
//         b: 1,
//         c: 1,
//       },
//     },
//   ];

//   isVisible = true;

//   ngOnInit(): void {}
//   posts: Post[] = [
//     { title: 'Post 1', text: 'Text 1', id: 1 },
//     { title: 'Post 2  ', text: 'Text 2 about new technology', id: 2 },
//     { title: 'Post 3', text: 'Text 3', id: 3 },
//   ];

//   updatePost(post: Post) {
//     this.posts.unshift(post);
//   }
// }
