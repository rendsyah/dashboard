import { INITIAL_STATE } from '.';
import { actionsTypes } from './actions';

const actionsReducer = (state: InitialState, { type, payload }: Action) => {
  switch (type) {
    case actionsTypes.CLEAR_STATE:
      return INITIAL_STATE;

    case actionsTypes.UPDATE_PAGINATION:
      return {
        ...state,
        pagination: {
          currentPage: payload.currentPage,
          limit: payload.limit,
        } as Pagination,
      };

    case actionsTypes.UPDATE_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          search: payload.search,
          startDate: payload.startDate,
          endDate: payload.endDate,
          type: payload.type,
          status: payload.status,
          orderBy: payload.orderBy,
          sort: payload.sort,
        } as Filter,
      };

    case actionsTypes.SHOW_SNACKBAR:
      return {
        ...state,
        snackbar: payload as boolean,
      };

    case actionsTypes.SHOW_MODAL:
      return {
        ...state,
        modal: payload as boolean,
      };

    default:
      return state;
  }
};

export const utilsReducer = (state: InitialState, { type, payload }: Action) => {
  return actionsReducer(state, { type, payload });
};
