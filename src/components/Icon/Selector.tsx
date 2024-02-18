import { Grid, Home, Settings, User } from 'react-feather';
import { IconListProps } from './Icon.types';

const IconsList: IconListProps = {
  Default: Grid,
  Home: Home,
  User: User,
  Setting: Settings,
};

const IconSelector = (name: string | null) => {
  const getIcon = name && IconsList[name];

  if (getIcon) {
    return getIcon;
  } else {
    return IconsList['Default'];
  }
};

export default IconSelector;
