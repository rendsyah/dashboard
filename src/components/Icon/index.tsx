import { IconProps } from './Icon.types';
import styles from './Icon.module.scss';

const Icon: React.FC<IconProps> = (props: IconProps) => {
  return (
    <div className={styles.icon} style={{ background: props.background }}>
      {<props.icon size={props.size} color={props.color} />}
    </div>
  );
};

export default Icon;
