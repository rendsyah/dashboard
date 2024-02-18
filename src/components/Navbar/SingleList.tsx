import React from 'react';
import Link from 'next/link';
import cx from 'classnames';
import styles from './Navbar.module.scss';

const SingleList: React.FC<NavbarListProps> = (props: NavbarListProps) => {
  const { currentRoute, menu } = props;

  return (
    <Link
      href={menu.path}
      className={cx(styles.navbar__right__quick__link, {
        [styles.navbar__right__quick__active]: currentRoute === menu.path,
      })}
    >
      {menu.name}
    </Link>
  );
};

export default SingleList;
