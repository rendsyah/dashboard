import { IconSquareProps } from './Icon.types';
import styles from './Icon.module.scss';

const IconSquare: React.FC<IconSquareProps> = (props: IconSquareProps) => {
  return (
    <div className={styles.icon} style={{ background: props.background }}>
      {<props.icon size={props.size} color={props.color} />}
    </div>
  );
};

export default IconSquare;
