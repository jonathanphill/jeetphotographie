import { useState } from "react";
// App.js
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Main from "./components/Main";
import AboutMe from "./components/AboutMe";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/work" element={<WORK />} /> */}
        <Route path="/aboutMe" element={<AboutMe />} />
        {/* <Route path="/travels" element={<Travels />} /> */}
      </Routes>
    </>
  );
}

export default App;
