import { createContext } from "react";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  <AuthContext.Provider>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
