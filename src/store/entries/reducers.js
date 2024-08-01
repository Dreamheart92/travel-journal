import entriesKeys from './types';
import { INITIAL_KEY_STATE } from './initialState';

const resetState = (state, action) => {
  const { key } = action.payload;
  state[key] = INITIAL_KEY_STATE;
};

const addLocalComment = (state, action) => {
  state[entriesKeys.COMMENTS].results.unshift(action.payload);
};

const deleteLocalComment = (state, action) => {
  const { commentId } = action.payload;

  const indexOfTargetedComment = state[entriesKeys.COMMENTS].results
    .findIndex((localComment) => (
      localComment._id === commentId));

  if (indexOfTargetedComment !== -1) {
    state[entriesKeys.COMMENTS].results.splice(indexOfTargetedComment, 1);
  }
};

const updateLocalCommentWithRealData = (state, action) => {
  const commentRealData = action.payload;

  const localCommentIndex = state[entriesKeys.COMMENTS].results
    .findIndex((localComment) => (
      String(new Date(localComment.createdAt)) === String(new Date(commentRealData.createdAt))
      && localComment.comment === commentRealData.comment
      && localComment.author._id === commentRealData.author._id
    ));

  if (localCommentIndex !== -1) {
    state[entriesKeys.COMMENTS].results[localCommentIndex] = commentRealData;
  }
};

const updateLocalCommentReaction = (state, action) => {
  const {
    reactionType,
    isReacted,
    commentId,
    userId,
  } = action.payload;

  const reactions = {
    likes: 'likes',
    dislikes: 'dislikes',
  };

  const currentReaction = reactions[reactionType];

  const oppositeReaction = currentReaction === reactions.likes
    ? reactions.dislikes
    : reactions.likes;

  const reactedLocalComment = state[entriesKeys.COMMENTS].results.find((localComment) => (
    localComment._id === commentId));

  if (isReacted) {
    const indexOfReactedUser = reactedLocalComment[currentReaction].findIndex((reactedId) => (
      reactedId === userId));

    reactedLocalComment[currentReaction].splice(indexOfReactedUser, 1);
  } else {
    reactedLocalComment[currentReaction].push(userId);

    const indexOfOppositeReaction = reactedLocalComment[oppositeReaction]
      .findIndex((reactedId) => (
        reactedId === userId));

    if (indexOfOppositeReaction !== -1) {
      reactedLocalComment[oppositeReaction].splice(indexOfOppositeReaction, 1);
    }
  }
};

export {
  resetState,
  addLocalComment,
  deleteLocalComment,
  updateLocalCommentWithRealData,
  updateLocalCommentReaction,
};
