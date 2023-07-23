import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
const UserContext = React.createContext();

function UserProvider({ children }) {
  const navigate = useNavigate();
  const [userAuth, setUserAuth] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [cookies, setCookies] = useCookies(null);
  const [openRegister, setOpenRegister] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenregister = () => {
    setOpenRegister(true);
    handleClose();
  };
  const handleCloseRegister = () => setOpenRegister(false);
  const userGetToken = async (values) => {
    try {
      const response = await axios.post(
        "https://localhost:7272/api/Auth",
        values
      );
      setLoginError(null);
      setCookies("accessToken", response.data.data.accessToken);
      setCookies(
        "accessTokenExpiration",
        new Date(response.data.data.accessTokenExpiration).getTime()
      );
      setUserAuth(true);
      setCookies("userAuth", !userAuth);
      setCookies("userEmail", values.Email);
      navigate("/");
    } catch (response) {
      setLoginError(response.response.data.error.errors);
    }
  };
  const registerFromSubmit = (values) => {
    console.log(values);
    //api kısmında kayıt olana rol ataması yap
    //veriyi gönder
  };
  const userCookieDelete = () => {
    setCookies("accessToken", "", { maxAge: 0 });
    setCookies("accessTokenExpiration", "", { maxAge: 0 });
    setCookies("userAuth", "", { maxAge: 0 });
    setCookies("userEmail", "", { maxAge: 0 });
    setUserAuth(false);
    handleClose();
  };
  return (
    <>
      <UserContext.Provider
        value={{
          cookies,
          setUserAuth,
          userGetToken,
          loginError,
          userCookieDelete,
          openRegister,
          handleOpenregister,
          handleCloseRegister,
          handleOpen,
          handleClose,
          open,
          registerFromSubmit,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
}
export { UserProvider, UserContext };
