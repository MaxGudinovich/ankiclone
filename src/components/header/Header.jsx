import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.navigate}>
        <NavLink to="/decks" className={styles.navLink}>
          Decks
        </NavLink>
        <NavLink to="/add" className={styles.navLink}>
          Add deck
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
