import React from 'react';
import Image from 'next/image';
import cx from 'classnames';
import styles from './Avatar.module.scss';

const Avatar: React.FC<AvatarProps> = ({ size, name, children, src }) => {
  const resultName: string[] = [];

  if (name) {
    const splitName = name.toLowerCase().split(/\s/g);
    splitName.forEach((value) => {
      resultName.push(value.charAt(0).toUpperCase() + value.slice(1));
    });
  }

  return (
    <div className={cx(styles.avatar, { [styles.avatar__small]: size === 'small' })}>
      {name && <span className={styles.avatar__name}>{resultName.join('')}</span>}
      {src && <Image className={styles.avatar__image} src={src} alt="Avatar" width={0} height={0} sizes="100%" />}
    </div>
  );
};

export default Avatar;
