import { createContext, useState } from 'react';

export const CommentsContext = createContext();

const CommentsProvider = ({ children }) => {
  const [comments, setComments] = useState([]);

  const context = {};

  return (
    <CommentsContext.Provider value={context}>
      {children}
    </CommentsContext.Provider>
  );
};
