import Image from 'next/image';
import cx from 'classnames';
import { useRouter } from 'next/router';
import { useSidebar } from '@/contexts/Sidebar';
import { listMenu } from '../../../mock/menu';
import SingleList from './SingleList';
import NestedList from './NestedList';
import styles from './Sidebar.module.scss';

const Sidebar: React.FC = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const { collapse } = useSidebar();

  return (
    <div className={cx(styles.sidebar, { [styles.sidebar__collapse]: collapse })}>
      <div className={styles.sidebar__header}>
        <Image
          src={'/images/logo.png'}
          alt="Logo"
          width={0}
          height={0}
          sizes="100%"
          style={{ width: 50, height: 50 }}
        />
      </div>
      <hr className={styles.sidebar__divider} />
      <ul className={styles.sidebar__menu}>
        {listMenu.map((menu, idx) => (
          <li key={menu.name + idx}>
            {menu.child.length === 0 ? (
              <SingleList currentRoute={currentRoute} menu={menu} />
            ) : (
              <NestedList currentRoute={currentRoute} menu={menu} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
