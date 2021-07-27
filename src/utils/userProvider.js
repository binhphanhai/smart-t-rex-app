import React, { useContext, useState } from "react";

const UserContext = React.createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useGetUser = () => {
  const { user } = useContext(UserContext);
  return user;
};

export const useSetUser = () => {
  const { setUser } = useContext(UserContext);
  return setUser;
};

export default UserProvider;
