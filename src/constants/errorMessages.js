import { OPTIMISTIC_STATE_KEYS } from './redux';

const optimisticErrorMessages = {
  [OPTIMISTIC_STATE_KEYS.POST_COMMENT]: 'Something went wrong. Unable to create your comment.',
  [OPTIMISTIC_STATE_KEYS.POST_COMMENT_REACTION]: 'Something went wrong. Unable to update your reaction.',
  [OPTIMISTIC_STATE_KEYS.DELETE_COMMENT]: 'Something went wrong. Unable to delete your comment.',
  [OPTIMISTIC_STATE_KEYS.LIKE_JOURNAL]: 'Something went wrong. Unable to like the journal.',
};

const ERROR_PAGE_TYPES = {
  NOT_FOUND: 'NOT_FOUND',
  SERVER_ERROR: 'SERVER_ERROR',
};

const ERROR_PAGE_MESSAGE = {
  [ERROR_PAGE_TYPES.NOT_FOUND]: {
    code: '404',
    title: 'Oops! Looks like we’ve drifted off course.',
    caption: 'Let’s navigate back to safety.',
    buttonCaption: 'Back to home',
  },
  [ERROR_PAGE_TYPES.SERVER_ERROR]: {
    code: '500',
    title: 'Oops! Something Went Wrong',
    caption: 'We’re experiencing some technical difficulties and are working hard to fix the issue. Please refresh or try again later.',
    buttonCaption: 'Refresh',
  },
};

export {
  optimisticErrorMessages,
  ERROR_PAGE_MESSAGE,
  ERROR_PAGE_TYPES,
};
