import { Icon } from 'react-feather';

export type MenuList = {
  name: string;
  path: string;
  icon: Icon | null;
  child: MenuList[] | never[];
};

export type SidebarListProps = {
  currentRoute: string;
  menu: MenuList;
};
