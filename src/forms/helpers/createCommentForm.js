export const constructLocalComment = (user, comment, id) => ({
  _id: id,
  createdAt: new Date(),
  author: user,
  comment,
  dislikes: [],
  likes: [],
  totalLikes: 0,
});

export const buildTemporaryCommentId = () => `${Math.random() * 1000}___temporary`;
