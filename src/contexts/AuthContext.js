import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) setUser(storedUser);
  }, []);

  function login(username, password) {
    const fakeUser = { username };
    setUser(fakeUser);
    localStorage.setItem('user', JSON.stringify(fakeUser));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem('user');
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
