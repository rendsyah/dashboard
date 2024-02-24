import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import styles from './Layout.module.scss';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.layout__content}>
        <Navbar />
        <div className={styles.layout__content__children}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
