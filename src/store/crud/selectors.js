import crudKeys from './types';

export const selectCrud = (state) => state.crud;

export const selectListState = (state) => state.crud[crudKeys.LIST];

export const selectCurrentState = (state) => state.crud[crudKeys.CURRENT];

export const selectReadState = (state) => state.crud[crudKeys.READ];

export const selectCreateState = (state) => state.crud[crudKeys.CREATE];

export const selectUpdateState = (state) => state.crud[crudKeys.UPDATE];

export const selectDeleteState = (state) => state.crud[crudKeys.DELETE];
