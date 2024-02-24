import React from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { ChevronDown, ChevronRight } from 'react-feather';
import { IconSelector, IconSquare } from '../Icon';
import styles from './Sidebar.module.scss';

const NestedList: React.FC<SidebarListProps> = (props: SidebarListProps) => {
  const { currentRoute, menu } = props;

  const [open, setOpen] = React.useState(false);

  const parentRoute = '/' + currentRoute.split('/')[1];

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className={cx(styles.sidebar__menu__list, {
          [styles.sidebar__menu__list__active]: parentRoute === menu.path,
        })}
        onClick={handleOpen}
      >
        <IconSquare
          color={parentRoute === menu.path ? '#fff' : '#4f8fbf'}
          background={parentRoute === menu.path ? '#4f8fbf' : '#fff'}
          icon={IconSelector(menu.icon)}
          size={14}
        />
        <span>{menu.name}</span>
        <div className={styles.sidebar__menu__list__icon}>
          <div>{open ? <ChevronDown size={14} /> : <ChevronRight size={14} />}</div>
        </div>
      </div>
      {open && (
        <ul>
          {menu.child.map((child, idx) => (
            <li key={child.name + idx}>
              <Link href={child.path}>
                <div
                  className={cx(styles.sidebar__menu__nested, {
                    [styles.sidebar__menu__nested__active]: currentRoute === child.path,
                  })}
                >
                  <span>{child.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default NestedList;
