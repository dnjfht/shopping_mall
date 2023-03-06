import { createContext, useEffect, useState } from "react";
import { login, logout, onUserStateChange } from "../../firebase";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  <AuthContext.Provider value={{ user, login, logout }}>
    {children}
  </AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
