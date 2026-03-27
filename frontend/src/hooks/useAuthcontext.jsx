import { AuthContext } from "../context/Authcontext";
import { useContext } from "react";

export const useAuthcontext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error('useAuthcontext must be used inside an AuthContextProvider');
  }

  return context;
};