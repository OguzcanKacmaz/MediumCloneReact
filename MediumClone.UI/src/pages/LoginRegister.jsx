import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/Login.css";
import { UserContext } from "../context/UserContext";
import RegisterForm from "../components/RegisterForm";
import Backdrop from "@mui/material/Backdrop";
import LoginForm from "../components/LoginForm";

const backdropStyle = {
  zIndex: -1,
  backgroundColor: "rgba(255, 255, 255, 0.95)",
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 700,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 2,
  p: 4,
};
export default function LoginRegister() {
  const {
    handleCloseModal,
    openModal,
    loginError,
    openRegister,
    registerMessage,
  } = React.useContext(UserContext);
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        slots={{ backdrop: Backdrop }}
        slotProps={{ backdrop: { style: backdropStyle } }}
      >
        <Box sx={style}>
          <CloseIcon onClick={handleCloseModal} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {openRegister ? "Welcome back." : "Join Medium."}
          </Typography>
          {registerMessage && <div className="info">{registerMessage}</div>}
          {loginError && <div className="alert">{loginError}</div>}
          {openRegister ? <RegisterForm /> : <LoginForm />}
        </Box>
      </Modal>
    </div>
  );
}
