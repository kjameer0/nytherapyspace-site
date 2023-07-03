import { useState } from 'react';
import { Outlet } from 'react-router-dom';
//components
import NavBar from 'components/NavBar/index';
import { Drawer } from 'components/Drawer';
import Footer from 'components/Footer';
function App() {

  return (
    <>
      <NavBar  />
      {/* <div style={{  height: '100%', backgroundColor: 'red', margin: 0 }}></div> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
