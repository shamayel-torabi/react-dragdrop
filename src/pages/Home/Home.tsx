import { useRef } from 'react';
// import { DropZone } from '../../components/DropZone';
// import { Header } from '../../components/Header';
//import type { Role } from '../../context/type';
import { Modal } from '../../components/Modal';

import styles from './Home.module.css';
// const roles: Role[] = [
//   { id: "USERS", name: "کاربران" },
//   { id: "ADMINS", name: "مدیران" },
// ]


const Home = () => {
  const ref = useRef<HTMLDialogElement>(null);

  const handlBtnClick = () => {
    ref.current?.showModal();
  }

  return (
    <div className={styles.home}>
      {/* <section>
        {roles.map(role =><DropZone role={role}/>)}
      </section>  */}
      <button onClick={handlBtnClick}>Show</button>
      <Modal ref={ref} heading='Title'>
        <p>Test</p>
      </Modal>
    </div>
  );
}

export default Home;