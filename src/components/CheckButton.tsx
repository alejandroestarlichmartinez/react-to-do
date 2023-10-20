import CheckIcon from '../assets/icons/icon-check.svg';

type Props = {
  isCompleted: boolean;
  updateTodo: () => void;
}

export const CheckButton = ({ isCompleted = false, updateTodo }: Props) => {
  const styles = isCompleted ? 'flex justify-center items-center h-5 w-5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : 'inline-block h-5 w-5 rounded-full border-2 dark:border-gray-400';

  return (
    <button onClick={updateTodo} className={styles} >
      { isCompleted && <img src={CheckIcon} alt='Check' /> }
    </button>
  )
}
