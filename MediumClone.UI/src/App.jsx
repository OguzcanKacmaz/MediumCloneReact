import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  const { userAuth } = useContext(UserContext);
  return (
    <div className="main">
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
