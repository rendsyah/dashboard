import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import styles from './Layout.module.scss';

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.layout__content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
