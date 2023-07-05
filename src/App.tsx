import { useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
//components
import NavBar from 'components/NavBar/index';
import Footer from 'components/Footer';
function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
