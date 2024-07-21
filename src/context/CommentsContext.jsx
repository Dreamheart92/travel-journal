import { createContext, useState } from 'react';

export const CommentsContext = createContext();

function CommentsProvider({ children }) {
  const [comments, setComments] = useState([]);

  const handleInitComments = (newComments) => {
    setComments(newComments);
  };

  const handleAddNewComment = (newComment) => {
    setComments((prevState) => [newComment, ...prevState]);
  };

  const handleUpdateCommentWithRealData = (realCommentData, temporaryId) => {
    const localCommentIndex = comments.findIndex((localComment) => localComment._id === temporaryId);

    setComments((prevState) => {
      const updatedLocalComments = [...prevState];
      updatedLocalComments[localCommentIndex] = realCommentData;
      return updatedLocalComments;
    });
  };

  const context = {
    comments,
    onInitComments: handleInitComments,
    onAddLocalComment: handleAddNewComment,
    onUpdateCommentWithRealData: handleUpdateCommentWithRealData,
  };

  return (
    <CommentsContext.Provider value={context}>
      {children}
    </CommentsContext.Provider>
  );
}

export default CommentsProvider;
