import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/Login.css";
import LoginForm from "../components/LoginForm";
import { UserContext } from "../context/UserContext";
import RegisterForm from "../components/RegisterForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function Register() {
  const { openRegister, handleClose, loginError } =
    React.useContext(UserContext);
  return (
    <div>
      <Modal
        open={openRegister}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon onClick={handleClose} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Register
          </Typography>
          <RegisterForm />
        </Box>
      </Modal>
    </div>
  );
}