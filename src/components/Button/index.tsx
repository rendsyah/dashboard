import cx from 'classnames';
import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      disabled={props.disabled}
      onClick={!props.disabled ? props.onClick : undefined}
      className={cx(styles.button, {
        [styles.button__disabled]: props.disabled,
        [styles.button__primary]: props.variant === 'primary' && !props.disabled,
        [styles.button__secondary]: props.variant === 'secondary' && !props.disabled,
      })}
    >
      {props.children}
    </button>
  );
};

export default Button;
