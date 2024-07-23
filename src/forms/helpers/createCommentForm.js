export const buildTemporaryCommentId = () => `${Math.random() * 1000}___temporary`;

export const buildLocalComment = (user, comment) => ({
  _id: buildTemporaryCommentId(),
  createdAt: String(new Date()),
  author: user,
  comment,
  dislikes: [],
  likes: [],
  totalLikes: 0,
});
