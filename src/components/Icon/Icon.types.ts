import { Icon } from 'react-feather';

export type IconSquareProps = {
  size: number;
  background: string;
  color: string;
  icon: Icon;
};

export type IconListProps = {
  [key: string]: Icon;
};
