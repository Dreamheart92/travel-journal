import { createSelector } from '@reduxjs/toolkit';
import optimisticKeys from './types';

export const selectOptimistic = (state) => state.optimistic;

export const selectPostCommentOptimistic = (state) => state.optimistic[optimisticKeys.POST_COMMENT];

export const selectDeleteCommentOptimistic = (state) => state.optimistic[optimisticKeys.DELETE_COMMENT];

export const selectPostCommentReactionOptimistic = (state) => (state.optimistic[optimisticKeys.POST_COMMENT_REACTION]);

export const selectOptimisticErrors = createSelector(
  [selectPostCommentOptimistic, selectDeleteCommentOptimistic, selectPostCommentReactionOptimistic],
  (postCommentOptimistic, deleteCommentOptimistic, postCommentReactionOptimistic) => {
    return {
      [optimisticKeys.POST_COMMENT]: postCommentOptimistic.error,
      [optimisticKeys.DELETE_COMMENT]: deleteCommentOptimistic.error,
      [optimisticKeys.POST_COMMENT_REACTION]: postCommentReactionOptimistic.error,
    };
  },
);
