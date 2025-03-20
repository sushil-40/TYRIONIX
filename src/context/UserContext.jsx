import { createContext, useContext, useState } from "react";
//Create Context
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

//Consume Context
export const useUser = () => useContext(UserContext);
