import { useState, useEffect } from "react";
import Navbar from "../Components/template/Navbar";
import Footer from "../Components/template/Footer";

const About = () => {
  const [getValue, setValue] = useState(1);
  const [getName, setName] = useState("");

  useEffect(() => {
    if (getValue === -1) {
      setValue(0);
    }

    if(getValue === 1){
        setName("Alfian Vito Anggoro")
    } else {
        setName("Amelia Tria Agustina")
    }
  }, [getValue]);

  return (
    <>
      <Navbar title={"AVA"} />
      <div>
        <h1>Ini adalah Halaman About</h1>
        <button onClick={() => setValue((prev) => prev + 1)}>Tambah Value</button>
        <button onClick={() => setValue((prev) => prev - 1)}>Kurangi Value</button>
        <p>value State : {getValue}</p>
        <p>name State : {getName}</p>
      </div>
      <Footer year={"2023"} />
    </>
  );
};

export default About;
