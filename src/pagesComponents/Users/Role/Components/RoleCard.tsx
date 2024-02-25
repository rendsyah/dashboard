import Image from 'next/image';
import { Copy, User } from 'react-feather';
import Paper from '@/components/Paper';
import styles from '../Role.module.scss';
import Avatar from '@/components/Avatar';

const RoleCard: React.FC<RoleCardProps> = ({ role }) => {
  return (
    <Paper>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <div className={styles.card__header__text}>
            <User size={18} />
            <span>Total 4 users</span>
          </div>
          <ul>
            {Array(5)
              .fill(0)
              .map((_, idx) => (
                <li key={idx} className={styles.card__header__list}>
                  <span className={styles.card__header__list__name}>Rendy Ferdiansyah</span>
                  <Image
                    className={styles.card__header__list__image}
                    src={'/images/users.png'}
                    alt="User"
                    width={0}
                    height={0}
                    sizes="100%"
                  />
                </li>
              ))}
          </ul>
        </div>
        <div className={styles.card__content}>
          <div>
            <h2>{role}</h2>
            <span className={styles.card__content__text}>Edit Role</span>
          </div>
          <div className={styles.card__content__icon}>
            <Copy size={18} />
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default RoleCard;
