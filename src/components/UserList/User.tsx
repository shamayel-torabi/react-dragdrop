import type { UserType } from '../../context/user'
import styles from './User.module.css';

type UserProps = {
    user: UserType
}

export const User = ({user}: UserProps) => {
  const handleDragStart  = (event:React.DragEvent<HTMLLIElement> ) =>{
    event.dataTransfer.setData('id', user.id);
  }
  return (
    <li className={styles.user} onDragStart={handleDragStart} draggable>{user.name}</li>
  )
}