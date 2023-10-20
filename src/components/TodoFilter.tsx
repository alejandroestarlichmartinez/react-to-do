// interfaces
import { TodoFilterEnum } from "../interfaces";

type Props = {
  filterTodos: (filter: TodoFilterEnum) => void;
}

const styles = "hover:text-blue-600 text-gray-600 font-semibold dark:text-gray-300";

export const TodoFilter = ({ filterTodos }: Props) => {
  
  return (
    <section className="container mx-auto mt-8">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-md flex justify-center gap-4 transition-all duration-500">
        <button className={styles} onClick={() => filterTodos(TodoFilterEnum.All)}>All</button>
        <button className={styles} onClick={() => filterTodos(TodoFilterEnum.Active)}>Active</button>
        <button className={styles} onClick={() => filterTodos(TodoFilterEnum.Completed)}>Completed</button>
      </div>
    </section>
  )
}
