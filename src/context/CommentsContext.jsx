import { createContext, useState } from 'react';

export const CommentsContext = createContext();

const CommentsProvider = ({ children }) => {
  const [comments, setComments] = useState([]);

  const handleInitComments = (newComments) => {
    setComments(newComments);
  };

  const context = {
    comments,
    onInitComments: handleInitComments,
  };

  return (
    <CommentsContext.Provider value={context}>
      {children}
    </CommentsContext.Provider>
  );
};

export default CommentsProvider;
