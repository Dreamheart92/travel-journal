import crudConstants from '../../constants/crudConstants';

export const selectCrud = (state) => state.crud;

export const selectListState = (state) => state.crud[crudConstants.LIST];

export const selectCurrentState = (state) => state.crud[crudConstants.CURRENT];

export const selectCreateState = (state) => state.crud[crudConstants.CREATE];

export const selectUpdateState = (state) => state.crud[crudConstants.UPDATE];

export const selectDeleteState = (state) => state.crud[crudConstants.DELETE];
