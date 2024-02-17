import { Menu, Bell } from 'react-feather';
import styles from './Navbar.module.scss';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__left}>
        <Menu />
        <span>Cleaning Service App</span>
      </div>
      <div className={styles.navbar__right}>
        <Bell size={16} />
        <div className={styles.navbar__right__avatar}>
          <Image
            priority={true}
            className={styles.navbar__right__image}
            src={'/images/users.png'}
            alt="Users"
            width={0}
            height={0}
            sizes="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
