import Link from 'next/link';
import cx from 'classnames';
import Paper from '../Paper';
import styles from './Navbar.module.scss';

const NestedList: React.FC<NavbarListProps> = (props: NavbarListProps) => {
  const { currentRoute, menu } = props;

  const parentRoute = '/' + currentRoute.split('/')[1];

  return (
    <div
      className={cx(styles.navbar__right__quick__nested, {
        [styles.navbar__right__quick__active]: parentRoute === menu.path,
      })}
    >
      <span className={styles.navbar__right__quick__link}>{menu.name}</span>
      <div className={styles.navbar__right__quick__menu}>
        <Paper>
          <ul className={styles.navbar__right__quick__menu__list}>
            {menu.child.map((child, idx) => (
              <li key={child.name + idx}>
                <Link
                  href={child.path}
                  className={cx({
                    [styles.navbar__right__quick__active]: currentRoute === child.path,
                  })}
                >
                  {child.name}
                </Link>
              </li>
            ))}
          </ul>
        </Paper>
      </div>
    </div>
  );
};

export default NestedList;
