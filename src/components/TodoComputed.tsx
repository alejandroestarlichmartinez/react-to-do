type Props = {
  computedItemsLeft: number;
  clearCompleted: () => void;
}

export const TodoComputed = ({ computedItemsLeft, clearCompleted }: Props) => {
  return (
    <section className="flex gap-4 p-4 items-center justify-between bg-white dark:bg-gray-800 rounded-b-md transition-all duration-500">
      <span className="text-gray-400">{ computedItemsLeft } items left</span>
      <button onClick={clearCompleted} className="text-gray-400">Clear completed</button>
    </section>
  )
}
