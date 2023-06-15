import { Todo } from './todo';

export interface IResponse {
  todos: Todo[];
  total: number;
  skip: number;
  limit: number;
}
