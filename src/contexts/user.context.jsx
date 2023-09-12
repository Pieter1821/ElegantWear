import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangedListener } from '../utils/firebase/firebase';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user);
    });

    // The return statement below unsubscribes the listener when the component unmounts.
    return () => {
      unsubscribe();
    };
  }, []); // Empty dependency array ensures the effect runs only once after the initial render.

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
