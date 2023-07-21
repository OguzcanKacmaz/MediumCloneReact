import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Trend from "./components/Trend";
import TrendContextProvider from "./context/TrendContext";

function App() {
  const { userAuth } = useContext(UserContext);
  return (
    <div className="main">
      <Navbar />
      <Header />
      <TrendContextProvider>
        <Trend />
      </TrendContextProvider>
    </div>
  );
}

export default App;
