import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sub!: Subscription;
  constructor() {
    const stream$ = new Observable((observe) => {
      setTimeout(() => {
        observe.next(1);
      }, 400);

      setTimeout(() => {
        observe.complete();
      }, 900);

      setTimeout(() => {
        observe.error('smt go wrong');
      }, 1000);
    });

    stream$.subscribe(
      (res) => console.log('Next:', res),
      (error) => console.log('error', error),
      () => console.log('complete ')
    );
  }
  stop() {
    this.sub.unsubscribe();
  }
}
