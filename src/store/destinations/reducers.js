import { findDestinationIndex } from '../../utils/utils';

const updateDestinationCount = (state, action) => {
  const { destinationId, isAdding } = action.payload;

  const destinationIndex = findDestinationIndex(state.destinations, destinationId);
  const { count } = state.destinations[destinationIndex];

  state.destinations[destinationIndex] = {
    ...state.destinations[destinationIndex],
    count: isAdding ? count + 1 : count - 1,
  };
};

const updateDestinationCountOnJournalEdit = (state, action) => {
  const { oldDestinationId, newDestinationId } = action.payload;

  const oldDestinationIndex = findDestinationIndex(state.destinations, oldDestinationId);
  const newDestinationIndex = findDestinationIndex(state.destinations, newDestinationId);

  state.destinations[oldDestinationIndex].count--;
  state.destinations[newDestinationIndex].count++;
};

export { updateDestinationCount, updateDestinationCountOnJournalEdit };
