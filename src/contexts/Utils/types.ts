type InitialState = {
  pagination: Pagination;
  filter: Filter;
  snackbar: boolean;
  modal: boolean;
};

type Action = {
  type: string;
  payload: any;
};
