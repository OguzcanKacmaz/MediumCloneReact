import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const UserContext = React.createContext();

function UserProvider({ children }) {
  const navigate = useNavigate();
  const [userAuth, setUserAuth] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [registerMessage, setRegisterMessage] = useState(null);
  const [cookies, setCookies] = useCookies(null);
  const [openRegister, setOpenRegister] = useState(false);

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
    setLoginError(null);
    setRegisterMessage(null);
  };
  const handleCloseModal = () => setOpenModal(false);

  const handleOpenregister = () => {
    setOpenRegister((prev) => !prev);
    setLoginError(null);
    setRegisterMessage(null);
  };
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
      var decodedToken = jwt_decode(response.data.data.accessToken);
      const name =
        decodedToken?.[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
        ];
      setCookies("fullName", name);
      navigate("/");
      return response;
    } catch (response) {
      setLoginError(response.response.data.error.errors);
    }
  };
  const registerFormSubmit = async (values) => {
    try {
      const response = await axios.post(
        "https://localhost:7272/api/Register",
        values
      );
      setLoginError(null);
      setRegisterMessage("Membership successful");
      console.log(response);
      return response;
    } catch (response) {
      setLoginError(response.response.data.error.errors);
    }
  };
  const userCookieDelete = () => {
    setCookies("accessToken", "", { maxAge: 0 });
    setCookies("accessTokenExpiration", "", { maxAge: 0 });
    setCookies("userAuth", "", { maxAge: 0 });
    setCookies("userEmail", "", { maxAge: 0 });
    setUserAuth(false);
    handleCloseModal();
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
          handleOpenModal,
          handleCloseModal,
          openModal,
          registerFormSubmit,
          registerMessage,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
}
export { UserProvider, UserContext };
