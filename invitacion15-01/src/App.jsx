import { useState } from 'react'
import './App.css'
import Portada15 from "./paginas/Portada15";
import { Routes, Route } from "react-router-dom";
import Invitacion15 from "./paginas/Invitacion15";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portada15 />} />
      <Route path="/invitacion" element={<Invitacion15 />} />
    </Routes>
  );
}

export default App;


/*



*/