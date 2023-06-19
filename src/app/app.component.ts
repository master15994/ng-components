import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
export interface IPerson {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos: IPerson[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<IPerson[]>('https://swapi.dev/api/people/1')
      .subscribe((res) => (this.todos = res));
  }
}
