import "./App.css";
import Header from "./components/Header";
import Top from "./components/Top";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div>
      <Header />
      <Outlet />
      <Top />
    </div>
  );
  
}

export default App;
