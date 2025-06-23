import React, { createContext, useState, ReactNode } from 'react';

export interface User {
  username: string;
}

interface UserContextType {
  user: User | null;
  setUser: (u: User | null) => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {}
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
