import styles from './Paper.module.scss';

const Paper: React.FC<PaperProps> = (props: PaperProps) => {
  const { children } = props;

  return <div className={styles.paper}>{children}</div>;
};

export default Paper;
