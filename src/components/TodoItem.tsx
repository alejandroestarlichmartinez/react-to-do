// vendors
import { forwardRef } from "react";
// components
import {
  CheckButton,
  CrossButton
} from "."
// interfaces
import { ITodo } from "../interfaces"

type Props = {
  todo: ITodo,
  updateTodo: (id: number, title?: string) => void;
  deleteTodo: (id: number) => void;
}

export const TodoItem = forwardRef<HTMLDivElement, Props>(({ todo, updateTodo, deleteTodo, ...props }: Props, ref) => {

  const { id, title, completed } = todo;

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    if (!newTitle.trim() || completed) return;
    updateTodo(id, newTitle);
  }

  return (
    <article {...props} ref={ref}>
      <div className="flex gap-4 p-4 items-center border-b border-gray-b-400 dark:border-b-gray-700 bg-white dark:bg-gray-800 transition-all duration-500">
        <CheckButton isCompleted={completed} updateTodo={() => updateTodo(id)} />
        <input onChange={handleTitleChange} className={
          `text-gray-500 dark:text-gray-300 text outline-none text-ellipsis font-semibold grow bg-transparent ${completed && 'line-through text-gray-300 dark:text-gray-500'} ${!completed && 'focus:text-gray-400 dark:focus:text-gray-200'}`
        } value={title} />
        <CrossButton deleteTodo={() => deleteTodo(id)} />
      </div>
    </article>
  )
}
)
