const CRUD_STATE_KEYS = {
  CREATE: 'CREATE',
  READ: 'READ',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
};

const JOURNALS_STATE_KEYS = {
  JOURNAL: 'JOURNAL',
  HOME: 'HOME_JOURNALS',
  CATALOGUE: 'CATALOGUE',
  COMMENTS: 'COMMENTS',
  USER_JOURNALS: 'USER_JOURNALS',
};

const OPTIMISTIC_STATE_KEYS = {
  POST_COMMENT: 'postComment',
  DELETE_COMMENT: 'deleteComment',
  POST_COMMENT_REACTION: 'postCommentReaction',
  LIKE_JOURNAL: 'likeJournal',
};

export { CRUD_STATE_KEYS, JOURNALS_STATE_KEYS, OPTIMISTIC_STATE_KEYS };
