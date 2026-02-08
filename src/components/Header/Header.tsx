import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
        <div>
            <img className={styles.logo} src='./vite.svg' alt='logo'/>
        </div>
        <nav>
            <ul>
                <li>Add User</li>
            </ul>
        </nav>
    </header>
  )
}