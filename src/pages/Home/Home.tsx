import { use } from 'react';
import { UserList } from '../../components/UserList';
import { DropZone } from '../../components/DropZone';
import { UserContex } from '../../context/UserContex';
import styles from './Home.module.css';


const Home = () => {
  const context = use(UserContex)

  return (
    <div className={styles.home}>
      <UserList users={context.users} />
      <DropZone />
    </div>
  );
}

export default Home;