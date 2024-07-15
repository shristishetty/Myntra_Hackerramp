import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import { Women } from './components/Women';
import { Navigate, Route, Routes } from 'react-router-dom';
import CalendarDemo from './components/CalendarDemo';
import { FaBirthdayCake } from 'react-icons/fa'; // Example icon from react-icons library

const App = () => {
  useEffect(() => {
    // Simulate a notification on website load
    toast.info(
      <div className = "">
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
        position: 'top-right',
        autoClose: 8000, // Close after 8 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  }, []);

  return (
    <>
      <div className="pt-[0.75rem] lg:pt-[1.25rem] overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/women" />} />
          <Route path="/women" element={<Women />} />
          <Route path="/calendar" element={<CalendarDemo />} />
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
