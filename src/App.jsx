import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
    <div className="bg-black h-screen flex flex-rowjustify-center items-center">
    <Navbar/>
    <div className="bg-white flex-1 h-0.5"></div>
    </div>
    </>
  );
}

export default App;
