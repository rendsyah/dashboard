type MenuList = {
  name: string;
  path: string;
  icon: string | null;
  child: MenuList[] | never[];
};

type SidebarListProps = {
  currentRoute: string;
  menu: MenuList;
};
