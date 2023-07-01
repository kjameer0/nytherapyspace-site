import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from 'components/NavBar/index';
import { Drawer } from 'components/Drawer';

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
