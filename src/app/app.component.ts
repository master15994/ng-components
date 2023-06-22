import { Component, OnInit } from '@angular/core';
import { Subscription, filter, interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sub!: Subscription;
  constructor() {
    const intervalStream$ = interval(1000);
    this.sub = intervalStream$
      .pipe(
        filter((res) => res % 2 === 0),
        map((res) => `Mapped ${res}`)
      )
      .subscribe((value) => console.log(value));
  }

  stop() {
    this.sub.unsubscribe();
  }
}
