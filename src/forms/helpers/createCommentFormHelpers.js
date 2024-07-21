export const constructLocalComment = (user, commentData, temporaryCommentId) => ({
  author: user,
  comment: commentData.content,
  createdAt: commentData.createdAt,
  dislikes: [],
  likes: [],
  totalLikes: 0,
  _id: commentData.id,
});

export const buildTemporaryCommentId = () => `${Math.random() * 1000}___temporary`;

export const handleEmptyComment = (setIsCommentEmpty, setIsTyping) => {
  setIsCommentEmpty(true);
  setIsTyping(false);
};

export const handleAddLocalComment = (user, commentData, onAddNewComment) => {
  const localComment = constructLocalComment(
    user,
    commentData,
  );

  onAddNewComment(localComment);
};
