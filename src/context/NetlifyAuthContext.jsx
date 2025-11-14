import React, { createContext, useContext, useState, useEffect } from 'react';

const NetlifyAuthContext = createContext();

export const useNetlifyAuth = () => {
  return useContext(NetlifyAuthContext);
};

export const NetlifyAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (window.netlifyIdentity) {
      const handleLogin = (user) => setUser(user);
      const handleLogout = () => setUser(null);

      window.netlifyIdentity.init();
      setUser(window.netlifyIdentity.currentUser());

      window.netlifyIdentity.on('login', handleLogin);
      window.netlifyIdentity.on('logout', handleLogout);

      return () => {
        window.netlifyIdentity.off('login', handleLogin);
        window.netlifyIdentity.off('logout', handleLogout);
      };
    } else {
      console.warn('Netlify Identity widget not found.');
    }
  }, []);

  const login = () => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.open('login');
    }
  };
  
  const logout = () => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.logout();
    }
  };

  const value = {
    user,
    login,
    logout,
  };

  return (
    <NetlifyAuthContext.Provider value={value}>
      {children}
    </NetlifyAuthContext.Provider>
  );
};
