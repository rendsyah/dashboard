import React from 'react';

export const actionsTypes = {
  CLEAR_STATE: 'CLEAR_STATE',
  UPDATE_PAGINATION: 'UPDATE_PAGINATION',
  UPDATE_FILTER: 'UPDATE_FILTER',
  SHOW_SNACKBAR: 'SHOW_SNACKBAR',
  SHOW_MODAL: 'SHOW_MODAL',
};

export const actionsDispatch = (dispatch: React.Dispatch<Action>) => ({
  CLEAR_STATE: () => dispatch({ type: actionsTypes.CLEAR_STATE, payload: {} }),
  UPDATE_PAGINATION: (value: Pagination) => dispatch({ type: actionsTypes.UPDATE_PAGINATION, payload: value }),
  UPDATE_FILTER: (value: Filter) => dispatch({ type: actionsTypes.UPDATE_FILTER, payload: value }),
  SHOW_SNACKBAR: (value: boolean) => dispatch({ type: actionsTypes.SHOW_SNACKBAR, payload: value }),
  SHOW_MODAL: (value: boolean) => dispatch({ type: actionsTypes.SHOW_MODAL, payload: value }),
});
