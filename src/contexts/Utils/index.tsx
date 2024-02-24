import React from 'react';
import { utilsReducer } from './reducer';
import { actionsDispatch } from './actions';

export const INITIAL_STATE: InitialState = {
  pagination: {
    currentPage: 1,
    limit: 10,
  },
  filter: {
    search: '',
    startDate: '',
    endDate: '',
    type: 0,
    status: 0,
    orderBy: '',
    sort: 'asc',
  },
  snackbar: false,
  modal: false,
};

const UtilsContext = React.createContext({
  states: INITIAL_STATE,
  actions: actionsDispatch((value) => value),
});

export const UtilsContextProvider = ({ children }: React.PropsWithChildren<unknown>) => {
  const [states, dispatch] = React.useReducer(utilsReducer, INITIAL_STATE);
  const actions = actionsDispatch(dispatch);

  return <UtilsContext.Provider value={{ states, actions }}>{children}</UtilsContext.Provider>;
};

export const useUtils = () => {
  return React.useContext(UtilsContext);
};
