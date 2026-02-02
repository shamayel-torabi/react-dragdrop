import { type DragEvent, use, useMemo, useState } from 'react';
import { UserContex } from '../../context/UserContex';
import clsx from 'clsx';
import styles from './index.module.css';
import { User } from '../UserList/User';

export const DropZone = () => {
  const [active, setActive] = useState(false);
  const { users, setRole } = use(UserContex)

  const handleDrop = (e: DragEvent<HTMLUListElement>) => {
    const id = e.dataTransfer.getData('id');
    setRole(id, "ad");
  }

  const handleDrogOver = (e: DragEvent<HTMLUListElement>) => {
    //console.log(e);
    e.preventDefault();
    setActive(true);
  }

  const filteredUser = useMemo(()=>{
    return users.filter(user => user.role !== undefined)
  },[users])

  return (
    <ul
      onDrop={handleDrop}
      onDragOver={handleDrogOver}
      className={clsx(styles['drop-zone'], active ? styles.active : undefined)}>
      {filteredUser.map(user => <User key={user.id} user={user} />)}
    </ul>
  )
}