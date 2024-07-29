import { buildErrorObject } from '../../helpers';

const extraReducers = (builder) => {
  builder.addMatcher(
    (action) => action.type.startsWith('crud/thunk/'),
    (state, action) => {
      const { requestStatus } = action.meta;
      const { key, currentAction } = action.meta.arg;

      if (!currentAction) {
        throw new Error('Provide a current action');
      }

      switch (requestStatus) {
        case 'pending': {
          state[key].loading = true;
          state[key].data = null;
          state[key].error = null;
          state[key].success = false;
          state[key].currentAction = currentAction;
          break;
        }
        case 'fulfilled': {
          state[key].data = action.payload;
          state[key].loading = false;
          state[key].success = true;
          break;
        }
        case 'rejected': {
          state[key].loading = false;
          state[key].error = buildErrorObject(action.error.message);
          break;
        }
        default:
      }
    },
  );
};

export default extraReducers;
