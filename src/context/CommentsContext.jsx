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

  const context = {
    comments,
    onInitComments: handleInitComments,
    onAddLocalComment: handleAddNewComment,
  };

  return (
    <CommentsContext.Provider value={context}>
      {children}
    </CommentsContext.Provider>
  );
}

export default CommentsProvider;
