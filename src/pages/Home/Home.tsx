import { DropZone } from '../../components/DropZone';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <DropZone role='Users' />
      <DropZone role='Admin' />
    </div>
  );
}

export default Home;