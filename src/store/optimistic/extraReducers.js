const extraReducers = (builder) => {
  builder.addMatcher(
    (action) => action.type.startsWith('optimistic'),
    (state, action) => {
      const { requestStatus } = action.meta;
      const { key } = action.meta.arg;

      switch (requestStatus) {
        case 'pending': {
          state[key].error = null;
          state[key].data = null;
          state[key].success = false;
          break;
        }
        case 'fulfilled': {
          state[key].data = action.payload;
          state[key].success = true;
          break;
        }
        case 'rejected': {
          state[key].error = action.error;
          break;
        }
        default:
      }
    },
  );
};

export default extraReducers;
