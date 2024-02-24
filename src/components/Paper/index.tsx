import styles from './Paper.module.scss';

const Paper: React.FC<PaperProps> = ({ children }) => {
  return <div className={styles.paper}>{children}</div>;
};

export default Paper;
