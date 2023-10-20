// icons
import CrossIcon from '../assets/icons/icon-cross.svg'

type Props = {
  deleteTodo: () => void;
}

export const CrossButton = ({ deleteTodo }: Props) => {
  return (
    <button onClick={deleteTodo}>
      <img 
        src={CrossIcon}
        alt='Delete'
      />
    </button>
  )
}