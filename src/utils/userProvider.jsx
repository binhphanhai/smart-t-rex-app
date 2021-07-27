import React, { useContext, useState } from "react";

const UserContext = React.createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const user = localStorage.getItem("user");
    if (user) return JSON.parse(user);
    else return {};
  });

  const handleSetUser = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const handleLogOut = () => {
    setUser({});
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, handleSetUser, handleLogOut }}>
      {children}
    </UserContext.Provider>
  );
};

export const useGetUser = () => {
  const { user } = useContext(UserContext);
  return user;
};

export const useSetUser = () => {
  const { handleSetUser } = useContext(UserContext);
  return handleSetUser;
};

export const useLogOut = () => {
  const { handleLogOut } = useContext(UserContext);
  return handleLogOut;
};

export default UserProvider;
