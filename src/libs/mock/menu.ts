export const listMenu = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'Home',
    is_header: 1,
    child: [],
  },
  {
    name: 'User Management',
    path: '/users',
    icon: 'User',
    is_header: 1,
    child: [
      {
        name: 'Users',
        path: '/users/list',
        icon: null,
        is_header: 0,
        child: [],
      },
      {
        name: 'Roles',
        path: '/users/role',
        icon: null,
        is_header: 0,
        child: [],
      },
      {
        name: 'Permissions',
        path: '/users/permission',
        icon: null,
        is_header: 0,
        child: [],
      },
    ],
  },
  {
    name: 'Setting',
    path: '/setting',
    icon: 'Setting',
    is_header: 1,
    child: [],
  },
];
