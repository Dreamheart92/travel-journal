import CRUD_STATE_KEYS from '../../constants/redux';

export const selectCrud = (state) => state.crud;

export const selectListState = (state) => state.crud[CRUD_STATE_KEYS.LIST];

export const selectCurrentState = (state) => state.crud[CRUD_STATE_KEYS.CURRENT];

export const selectReadState = (state) => state.crud[CRUD_STATE_KEYS.READ];

export const selectCreateState = (state) => state.crud[CRUD_STATE_KEYS.CREATE];

export const selectUpdateState = (state) => state.crud[CRUD_STATE_KEYS.UPDATE];

export const selectDeleteState = (state) => state.crud[CRUD_STATE_KEYS.DELETE];
