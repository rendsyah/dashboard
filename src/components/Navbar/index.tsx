import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';
import { useRouter } from 'next/router';
import { Bell, Inbox, LogOut, Menu, User } from 'react-feather';
import { useSidebar } from '@/contexts';
import { listMenu } from '@/libs/mock/menu';
import Paper from '../Paper';
import SingleList from './SingleList';
import NestedList from './NestedList';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const { handleSidebar } = useSidebar();
  const [triggerScroll, setTriggerScroll] = React.useState<boolean>(false);
  const [openProfile, setOpenProfile] = React.useState<boolean>(false);
  const openProfileRef = React.useRef<HTMLDivElement>(null);

  const handleOpenProfile = () => {
    setOpenProfile((prev) => !prev);
  };

  React.useEffect(() => {
    const onScroll = (e: Event) => {
      if (window.scrollY > 10) {
        setTriggerScroll(true);
      } else {
        setTriggerScroll(false);
      }
    };

    const onCloseMenu = (e: MouseEvent) => {
      if (openProfileRef.current && !openProfileRef.current.contains(e.target as Node)) {
        setOpenProfile(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('click', onCloseMenu);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('click', onCloseMenu);
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
        <div ref={openProfileRef} className={styles.navbar__right__profile}>
          <div className={styles.navbar__right__user} onClick={handleOpenProfile}>
            <div className={styles.navbar__right__avatar}>
              <Image
                className={styles.navbar__right__image}
                src={'/images/users.png'}
                alt="Users"
                width={0}
                height={0}
                sizes="100%"
              />
            </div>
            <div className={styles.navbar__right__account}>
              <span className={styles.navbar__right__account__name}>Rendy Ferdiansyah</span>
              <span className={styles.navbar__right__account__role}>Administrator</span>
            </div>
          </div>
          <div className={cx(styles.navbar__right__menu, { [styles.navbar__right__menu__open]: openProfile })}>
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
                <div className={styles.navbar__right__account}>
                  <span className={styles.navbar__right__account__name}>Rendy Ferdiansyah</span>
                  <span className={styles.navbar__right__account__role}>Administrator</span>
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
