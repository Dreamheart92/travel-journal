import { OPTIMISTIC_STATE_KEYS } from './redux';

const optimisticErrorMessages = {
  [OPTIMISTIC_STATE_KEYS.POST_COMMENT]: 'Something went wrong when creating your comment.',
  [OPTIMISTIC_STATE_KEYS.POST_COMMENT_REACTION]: 'Something went wrong when updating your reaction.',
  [OPTIMISTIC_STATE_KEYS.DELETE_COMMENT]: 'Something went wrong when deleting your comment.',
};

export { optimisticErrorMessages };
