// vendors
import {
  Draggable,
  Droppable
} from "@hello-pangea/dnd";
// components
import {
  TodoItem
} from "."
// interfaces
import { ITodo } from "../interfaces";

type Props = {
  todos: ITodo[];
  updateTodo: (id: number, title?: string) => void;
  deleteTodo: (id: number) => void;
}

export const TodoList = ({ todos, updateTodo, deleteTodo }: Props) => {

  return (
    <Droppable droppableId="todos">
      {
        (dropableProvided) => (
          <div
            ref={dropableProvided.innerRef}
            {...dropableProvided.droppableProps}
            className="bg-white rounded-t-md mt-8 dark:bg-gray-800 overflow-hidden transition-all duration-500"
          >
            {todos.map((todo, index) =>
              <Draggable draggableId={todo.id.toString()} key={todo.id} index={index} >
                {
                  (draggableProvided) => (
                    <TodoItem
                      ref={draggableProvided.innerRef}
                      todo={todo}
                      updateTodo={updateTodo}
                      deleteTodo={deleteTodo}
                      {...draggableProvided.dragHandleProps}
                      {...draggableProvided.draggableProps}
                    />
                  )
                }
              </Draggable>
            )}

            {dropableProvided.placeholder}
          </div>
        )
      }
    </Droppable>
  )
}
