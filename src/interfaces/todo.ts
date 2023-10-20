export interface ITodo {
  id: number,
  title: string,
  completed: boolean,
}

export enum TodoFilterEnum {
  All = 'all',
  Active = 'active',
  Completed = 'completed',
}