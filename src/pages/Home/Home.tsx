import { useRef } from 'react';
// import { DropZone } from '../../components/DropZone';
// import { Header } from '../../components/Header';
//import type { Role } from '../../context/type';
import { Modal } from '../../components/Modal';

import styles from './Home.module.css';
import { IconButton } from '../../components/IconButton';
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
      <IconButton style={{color: "#FFFFFF"}} onClick={handlBtnClick}>Show</IconButton>
      <Modal ref={ref} heading='عنوان'>
        <p>متن داخل دیالوگ</p>
        <form>
          <div>
            <label>
              <span>نام</span>
              <input />
            </label>
          </div>
          <div>
            <label>
              <span>نام خانوادگی</span>
              <input />
            </label>
          </div>
          <IconButton type='submit'>ارسال</IconButton>
        </form>
      </Modal>
    </div>
  );
}

export default Home;