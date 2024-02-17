import React from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { ChevronDown, ChevronUp, Icon as IconTypes } from 'react-feather';
import { SidebarListProps } from './Sidebar.types';
import Icon from '../Icon';
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
        <Icon
          color={parentRoute === menu.path ? '#fff' : '#4f8fbf'}
          background={parentRoute === menu.path ? '#4f8fbf' : '#fff'}
          icon={menu.icon as IconTypes}
          size={14}
        />
        <span>{menu.name}</span>
        <div className={styles.sidebar__menu__list__icon}>
          <div>{open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}</div>
        </div>
      </div>
      {open && (
        <>
          {menu.child.map((child, idx) => (
            <Link key={child.name + idx} href={child.path}>
              <div
                className={cx(styles.sidebar__menu__nested, {
                  [styles.sidebar__menu__nested__active]: currentRoute === child.path,
                })}
              >
                <span>{child.name}</span>
              </div>
            </Link>
          ))}
        </>
      )}
    </>
  );
};

export default NestedList;
