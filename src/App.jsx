import React, { useState } from "react";
import Header from "./components/Header";
import { Women } from "./components/Women";
import { Navigate, Route, Routes } from "react-router-dom";
import CalendarDemo from "./components/CalendarDemo";


const App = () => {

  return (
    <>
    
      <div className="pt-[0.75rem] lg:pt-[1.25rem] overflow-hidden">

        <Header />
        <Routes>
        <Route path="/" element={<Navigate to = "/women"/>} />
        <Route path="/women" element={<Women />} />
        <Route path="/calendar" element={<CalendarDemo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
