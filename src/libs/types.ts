type MenuList = {
  name: string;
  path: string;
  icon: string | null;
  is_header: number;
  child: MenuList[] | never[];
};

type Pagination = {
  currentPage: number;
  limit: number;
};

type Filter = {
  search: string;
  startDate: string | Date;
  endDate: string | Date;
  type: string | number;
  status: number;
  orderBy: string;
  sort: 'asc' | 'desc';
};
