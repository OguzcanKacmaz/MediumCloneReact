import React, { useState } from "react";
const UserContext = React.createContext();

function UserProvider({ children }) {
  const [userAuth, setUserAuth] = useState(false);
  return (
    <>
      <UserContext.Provider value={{ userAuth, setUserAuth }}>
        {children}
      </UserContext.Provider>
    </>
  );
}
export { UserProvider, UserContext };
