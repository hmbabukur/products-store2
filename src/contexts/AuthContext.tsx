import { createContext, useState, useEffect, ReactNode } from 'react';

interface User{
  id?: number;
  username: string;
}

interface AuthContextType{
  user: User | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

function AuthProvider({ children }: {children: ReactNode}) {
  const [user, setUser] = useState<User | null>(null);


  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  function login(username: string, password: string) {
    const fakeUser: User = { username };
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
