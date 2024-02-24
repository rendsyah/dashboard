import Link from 'next/link';
import cx from 'classnames';
import { IconSelector, IconSquare } from '../Icon';
import styles from './Sidebar.module.scss';

const SingleList: React.FC<SidebarListProps> = (props: SidebarListProps) => {
  const { currentRoute, menu } = props;

  return (
    <Link href={menu.path}>
      <div
        className={cx(styles.sidebar__menu__list, {
          [styles.sidebar__menu__list__active]: currentRoute === menu.path,
        })}
      >
        <IconSquare
          color={currentRoute === menu.path ? '#fff' : '#4f8fbf'}
          background={currentRoute === menu.path ? '#4f8fbf' : '#fff'}
          icon={IconSelector(menu.icon)}
          size={14}
        />
        <span>{menu.name}</span>
      </div>
    </Link>
  );
};

export default SingleList;
