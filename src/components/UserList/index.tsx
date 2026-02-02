import { useMemo } from 'react';
import type { UserType } from '../../context/user'
import { User } from './User';
import styles from './index.module.css';

type Props = {
  users: UserType[]
}

export const UserList = ({ users }: Props) => {
  const filteredUser = useMemo(() => {
    return users.filter(user => user.role === undefined)
  }, [users])

  return (
    <ul className={styles['user-list']}>
      {filteredUser.map(user => <User key={user.id} user={user} />)}
    </ul>
  )
}