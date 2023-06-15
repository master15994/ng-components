export interface ITodo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export class Todo implements ITodo {
  id!: number;
  todo!: string;
  completed!: boolean;
  userId!: number;

  constructor(data: ITodo) {
    Object.assign(this, data);
  }
}
