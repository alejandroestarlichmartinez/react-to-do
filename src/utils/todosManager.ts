import { ITodo } from "../interfaces";

export const setLocalTodos = (todos: ITodo[]) => {
  localStorage.setItem('todos', JSON.stringify(todos));
}

export const getLocalTodos = (): ITodo[] => {
  const todos = localStorage.getItem('todos');
  if (todos) {
    return JSON.parse(todos);
  }
  return [];
}