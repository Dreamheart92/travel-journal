import { createSlice } from '@reduxjs/toolkit';
import { fetchJournalById, postComment } from './thunks';

const initialState = {
  journal: null,
  comments: null,
  loading: false,
  error: null,
  commentCrud: {
    create: {
      commentData: null,
      success: false,
      loading: false,
    },
  },
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    addLocalComment(state, action) {
      state.comments.unshift(action.payload);
    },
    localCommentReaction(state, action) {
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

      const reactedLocalComment = state.comments.find((localComment) => (
        localComment._id === commentId));

      if (isReacted) {
        const indexOfReactedUser = reactedLocalComment[currentReaction].findIndex((reactedId) => (
          reactedId === userId));

        reactedLocalComment[currentReaction].splice(indexOfReactedUser, 1);
      } else {
        reactedLocalComment[currentReaction].push(userId);

        const indexOfOppositeReaction = reactedLocalComment[oppositeReaction].findIndex((reactedId) => (
          reactedId === userId));

        if (indexOfOppositeReaction !== -1) {
          reactedLocalComment[oppositeReaction].splice(indexOfOppositeReaction, 1);
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJournalById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchJournalById.fulfilled, (state, action) => {
      state.journal = action.payload.data;
      state.comments = action.payload.data.comments;
      state.loading = false;
    });
    builder.addCase(fetchJournalById.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(postComment.pending, (state) => {
      state.commentCrud.create.loading = true;
    });
    builder.addCase(postComment.fulfilled, (state, action) => {
      const commentRealData = action.payload.data;

      const localCommentIndex = state.comments.findIndex((localComment) => (
        String(new Date(localComment.createdAt)) === String(new Date(commentRealData.createdAt))
        && localComment.comment === commentRealData.comment
        && localComment.author._id === commentRealData.author._id
      ));

      state.comments[localCommentIndex] = commentRealData;
      state.commentCrud.create.loading = false;
    });
    builder.addCase(postComment.rejected, (state, action) => {
      state.commentCrud.create.loading = false;
    });
  },
});

export const detailsActions = detailsSlice.actions;
export default detailsSlice.reducer;
