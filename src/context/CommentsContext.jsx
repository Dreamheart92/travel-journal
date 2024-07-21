import { createContext, useMemo, useRef, useState } from 'react';
import { buildTemporaryCommentId } from '../forms/helpers/createCommentForm';

export const CommentsContext = createContext();

function CommentsProvider({ children }) {
  const [comments, setComments] = useState([]);

  const temporaryLocalCommentId = useRef(null);

  const handleInitComments = (newComments) => {
    setComments(newComments);
  };

  const handleAddNewComment = (newComment) => {
    temporaryLocalCommentId.current = buildTemporaryCommentId();
    setComments((prevState) => [
      { ...newComment, _id: temporaryLocalCommentId.current },
      ...prevState]);
  };

  const handleUpdateCommentWithRealData = (realCommentData) => {
    const localCommentIndex = comments.findIndex((localComment) => (
      localComment._id === temporaryLocalCommentId.current));

    setComments((prevState) => {
      const updatedLocalComments = [...prevState];
      updatedLocalComments[localCommentIndex] = realCommentData;
      return updatedLocalComments;
    });
  };

  const createCommentsContextValue = () => ({
    comments,
    onInitComments: handleInitComments,
    onAddLocalComment: handleAddNewComment,
    onUpdateCommentWithRealData: handleUpdateCommentWithRealData,
  });

  const context = useMemo(createCommentsContextValue, [comments]);

  return (
    <CommentsContext.Provider value={context}>
      {children}
    </CommentsContext.Provider>
  );
}

export default CommentsProvider;
