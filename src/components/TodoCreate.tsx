// vendors
import { useState } from "react";

type Props = {
  handle: (title: string) => void;
}

export const TodoCreate = ({ handle }: Props) => {
  const [title, setTitle] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!title.trim()) return setTitle('');
    handle(title);
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 bg-white dark:bg-gray-800 rounded-md overflow-hidden items-center flex gap-4 p-4 transition-all duration-500">
      <span className="inline-block h-5 w-6 rounded-full border-2" />
      <input className="w-full text-gray-400 outline-none bg-transparent" type="text" placeholder="Create a new todo..." value={ title } onChange={(e) => setTitle(e.target.value)} />
    </form>
  )
}
