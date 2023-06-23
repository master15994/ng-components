import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sub!: Subscription;

  stream$: Subject<number> = new Subject<number>();
  counter = 0;
  constructor() {
    this.sub = this.stream$.subscribe((res) => {
      console.log('subcribe', res);
    });
  }

  stop() {
    this.sub.unsubscribe();
  }

  next() {
    this.counter++;
    this.stream$.next(this.counter);
  }
}
