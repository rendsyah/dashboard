import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { SidebarContextProvider } from '@/contexts/Sidebar';
import styles from './Layout.module.scss';

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = props;

  return (
    <SidebarContextProvider>
      <div className={styles.layout}>
        <Sidebar />
        <div className={styles.layout__content}>
          <Navbar />
          <div className={styles.layout__content__children}>{children}</div>
        </div>
      </div>
    </SidebarContextProvider>
  );
};

export default Layout;
