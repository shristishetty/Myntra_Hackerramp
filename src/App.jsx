import React, { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import Header from "./components/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import { FaBirthdayCake } from "react-icons/fa"; 
import { Women } from "./components/Women";
import CalendarDemo from "./components/CalendarDemo";
import Contest from "./components/Contest";
import {Men} from "./components/Men";
// import Contest from "./components/Contest";
// const Contest = React.lazy(() => import("./components/Contest"));

const App = () => {
  
  useEffect(() => {
    toast(
      <div className="">
        <FaBirthdayCake size={24} style={{ marginRight: '0.5rem' }} />
        <div>
          <strong>Hey girl!</strong> Your birthday is coming up!
        </div>
        <div>
          View outfits perfectly according to your taste.{' '}
          <button onClick={() => alert('View Outfits')}>View Outfits</button>
        </div>
      </div>,
      {
        duration: 3000,
        position: 'top-right',
      }
    );
  }, []);

  return (
    <>
      <div className="pt-[0.75rem] lg:pt-[1.25rem] overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/women" />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/calendar" element={<CalendarDemo />} />
          <Route path="/contest" element={<Contest />} />
          {/* <Route path="/contest" element={
            // <Suspense fallback={<div>Loading...</div>}>
            //   <Contest />
            // </Suspense>
          } /> */}
        </Routes>
      </div>
      <Toaster /> 
    </>
  );
};

export default App;
