import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';
import { useRouter } from 'next/router';
import { Bell, Inbox, LogOut, Menu, User } from 'react-feather';
import { useSidebar } from '@/contexts/Sidebar';
import { listMenu } from '../../../mock/menu';
import Paper from '../Paper';
import styles from './Navbar.module.scss';
import SingleList from './SingleList';
import NestedList from './NestedList';

const Navbar: React.FC = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const { handleSidebar } = useSidebar();
  const [triggerScroll, setTriggerScroll] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  React.useEffect(() => {
    const onScroll = (e: Event) => {
      if (window.scrollY > 10) {
        setTriggerScroll(true);
      } else {
        setTriggerScroll(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className={cx(styles.navbar, { [styles.navbar__sticky]: triggerScroll })}>
      <div className={styles.navbar__left} onClick={handleSidebar}>
        <Menu size={18} />
      </div>
      <div className={styles.navbar__right}>
        <ul className={styles.navbar__right__quick}>
          {listMenu
            .filter((menu) => menu.is_header === 1)
            .map((menu, idx) => (
              <li key={menu.name + idx} className={styles.navbar__right__quick__list}>
                {menu.child.length === 0 ? (
                  <SingleList currentRoute={currentRoute} menu={menu} />
                ) : (
                  <NestedList currentRoute={currentRoute} menu={menu} />
                )}
              </li>
            ))}
        </ul>
        <hr className={styles.navbar__right__divider} />
        <div className={cx({ [styles.navbar__right__notify]: true })}>
          <Bell size={18} />
        </div>
        <div className={cx({ [styles.navbar__right__notify]: true })}>
          <Inbox size={18} />
        </div>
        <div className={styles.navbar__right__profile} onClick={handleOpen}>
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
          <div className={styles.navbar__right__user}>
            <span className={styles.navbar__right__user__name}>Rendy Ferdiansyah</span>
            <span className={styles.navbar__right__user__role}>Administrator</span>
          </div>
          <div className={cx(styles.navbar__right__menu, { [styles.navbar__right__menu__open]: open })}>
            <Paper>
              <div className={styles.navbar__right__menu__profile}>
                <div className={styles.navbar__right__menu__avatar}>
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
                <div className={styles.navbar__right__user}>
                  <span className={styles.navbar__right__user__name}>Rendy Ferdiansyah</span>
                  <span className={styles.navbar__right__user__role}>Administrator</span>
                </div>
              </div>
              <hr className={styles.navbar__right__menu__divider} />
              <ul className={styles.navbar__right__menu__list}>
                <li>
                  <Link href={'#'} className={styles.navbar__right__menu__link}>
                    <User size={18} />
                    <span>Profile</span>
                  </Link>
                </li>
                <li>
                  <Link href={'#'} className={styles.navbar__right__menu__link}>
                    <LogOut size={18} />
                    <span>Logout</span>
                  </Link>
                </li>
              </ul>
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
