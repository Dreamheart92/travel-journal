import { JOURNALS_STATE_KEYS } from '../../constants/redux';
import { INITIAL_KEY_STATE } from './initialState';

const resetState = (state, action) => {
  const { key } = action.payload;
  state[key] = INITIAL_KEY_STATE;
};

const addLocalComment = (state, action) => {
  state[JOURNALS_STATE_KEYS.COMMENTS].unshift(action.payload);
};

const deleteLocalComment = (state, action) => {
  const { commentId } = action.payload;

  const targetedCommentIndex = state[JOURNALS_STATE_KEYS.COMMENTS]
    .findIndex((localComment) => (
      localComment._id === commentId));

  if (targetedCommentIndex !== -1) {
    state[JOURNALS_STATE_KEYS.COMMENTS].splice(targetedCommentIndex, 1);
  }
};

const updateLocalCommentWithRealData = (state, action) => {
  const commentRealData = action.payload;

  const localCommentIndex = state[JOURNALS_STATE_KEYS.COMMENTS]
    .findIndex((localComment) => (
      String(new Date(localComment.createdAt)) === String(new Date(commentRealData.createdAt))
      && localComment.comment === commentRealData.comment
      && localComment.author._id === commentRealData.author._id
    ));

  if (localCommentIndex !== -1) {
    state[JOURNALS_STATE_KEYS.COMMENTS][localCommentIndex] = commentRealData;
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

  const reactedLocalComment = state[JOURNALS_STATE_KEYS.COMMENTS].find((localComment) => (
    localComment._id === commentId));

  if (isReacted) {
    const reactedUserIndex = reactedLocalComment[currentReaction].findIndex((reactedId) => (
      reactedId === userId));

    reactedLocalComment[currentReaction].splice(reactedUserIndex, 1);
  } else {
    reactedLocalComment[currentReaction].push(userId);

    const oppositeReactionIndex = reactedLocalComment[oppositeReaction]
      .findIndex((reactedId) => (
        reactedId === userId));

    if (oppositeReactionIndex !== -1) {
      reactedLocalComment[oppositeReaction].splice(oppositeReactionIndex, 1);
    }
  }
};

const toggleLocalJournalLike = (state, action) => {
  const { userId } = action.payload;
  const { likes } = state[JOURNALS_STATE_KEYS.JOURNAL].results;

  const isLikedJournal = likes.userIds.findIndex((likedIds) => likedIds === userId);

  if (isLikedJournal !== -1) {
    likes.userIds.splice(isLikedJournal, 1);
    likes.count--;
  } else {
    likes.userIds.push(userId);
    likes.count++;
  }
};

export {
  resetState,
  addLocalComment,
  deleteLocalComment,
  updateLocalCommentWithRealData,
  updateLocalCommentReaction,
  toggleLocalJournalLike,
};
