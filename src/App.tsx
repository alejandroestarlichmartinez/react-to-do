// vendors
import { useEffect, useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
// components
import {
  Header,
  TodoComputed,
  TodoCreate,
  TodoFilter,
  TodoList
} from "./components";
// interfaces
import { ITodo, TodoFilterEnum } from "./interfaces";
// utils
import { getLocalTodos, setLocalTodos } from "./utils/todosManager";

const initialTodos: Array<ITodo> = getLocalTodos();

const reorder = (list: any, startIndex: number, endIndex: number) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState<TodoFilterEnum>(TodoFilterEnum.All);
  useEffect(() => {
    setLocalTodos(todos);
  }, [todos]);

  const createTodo = (title: string) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    }
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id: number, newTitle?: string) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        console.log("updateTodo", id, newTitle)
        return (newTitle && newTitle !== todo.title) ? { ...todo, title: newTitle } : { ...todo, completed: !todo.completed }
      };
      return todo;
    });
    setTodos(updatedTodos);
  }

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }

  const compputedTodos = todos.filter(todo => !todo.completed).length;

  const clearCompleted = () => {
    const updatedTodos = todos.filter(todo => !todo.completed);
    setTodos(updatedTodos)
    setLocalTodos(updatedTodos);
  }

  const filterTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }

  const handleDragEnd = (result: any) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return;

    setTodos((prevTasks) =>
      reorder(prevTasks, source.index, destination.index)
    );
  };

  return (
    <div className="
      bg-gray-200
      dark:bg-gray-900 
      min-h-screen
      bg-[url('./assets/images/bg-mobile-light.jpg')] 
      dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]
      md:bg-[url('./assets/images/bg-desktop-light.jpg')]
      md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]
      bg-no-repeat bg-contain pb-8 
      transition-all 
    ">
      <Header />

      <main className="container mx-auto px-4 mt-8 md:max-w-2xl">
        <TodoCreate handle={(title: string) => createTodo(title)} />

        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList todos={filterTodos()} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        </DragDropContext>

        <TodoComputed computedItemsLeft={compputedTodos} clearCompleted={clearCompleted} />

        <TodoFilter filterTodos={(filter: TodoFilterEnum) => setFilter(filter)} />
      </main>
    </div>
  )
}

export default App