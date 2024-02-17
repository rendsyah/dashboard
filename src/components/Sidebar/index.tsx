import Image from 'next/image';
import { useRouter } from 'next/router';
import { Archive, Home } from 'react-feather';
import SingleList from './SingleList';
import NestedList from './NestedList';
import styles from './Sidebar.module.scss';

const listMenu = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: Home,
    child: [],
  },
  {
    name: 'Setting',
    path: '/setting',
    icon: Archive,
    child: [
      {
        name: 'Users',
        path: '/setting/users',
        icon: null,
        child: [],
      },
    ],
  },
];

const Sidebar: React.FC = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className={styles.sidebar}>
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
            {menu.child?.length === 0 ? (
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
