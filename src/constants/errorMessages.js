import optimisticKeys from '../store/optimistic/types';

const optimisticErrorMessages = {
  [optimisticKeys.POST_COMMENT]: 'Something went wrong when creating your comment.',
  [optimisticKeys.POST_COMMENT_REACTION]: 'Something went wrong when updating your reaction.',
  [optimisticKeys.DELETE_COMMENT]: 'Something went wrong when deleting your comment.',
};

export { optimisticErrorMessages };
