import { useState } from "react";
import "./App.css";
import Content from "./components/contents/Content";
import Footer from "./components/template/Footer";
import Navbar from "./components/template/Navbar";

function App() {
  const [getNavbarValue, setNavbarValue] = useState("");

  const changeNavbarValue = () => {
    return setNavbarValue("My Contact");
  };

  const name = () => {
    return <h2>Alfian Vito Anggoro</h2>;
  };
  return (
    <div>
      <Navbar title={"AVA"} newValue={getNavbarValue} />
      <button onClick={() => changeNavbarValue()}></button>
      <Content name={name} />
      <Footer year={"2023"} />
    </div>
  );
}

export default App;
