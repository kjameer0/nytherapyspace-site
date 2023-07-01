import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from 'components/NavBar/index';
import { Drawer } from 'components/Drawer';

function App() {

  return (
    <>
      <NavBar  />
      <div style={{  height: '100%', backgroundColor: 'red', margin: 0 }}></div>
      <Outlet />
    </>
  );
}

export default App;
