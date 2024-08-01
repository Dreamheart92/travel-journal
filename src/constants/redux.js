const CRUD_STATE_KEYS = {
  CREATE: 'create',
  READ: 'read',
  UPDATE: 'update',
  DELETE: 'delete',
};

const JOURNALS_STATE_KEYS = {
  JOURNAL: 'journal',
  JOURNALS: 'journals',
  COMMENTS: 'comments',
};

const OPTIMISTIC_STATE_KEYS = {
  POST_COMMENT: 'postComment',
  DELETE_COMMENT: 'deleteComment',
  POST_COMMENT_REACTION: 'postCommentReaction',
};

export { CRUD_STATE_KEYS, JOURNALS_STATE_KEYS, OPTIMISTIC_STATE_KEYS };
