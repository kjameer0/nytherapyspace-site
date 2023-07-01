import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from 'components/NavBar/index';
import { Drawer } from 'components/Drawer';

function App() {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  return (
    <>
      <NavBar setIsMounted={setIsMounted} />
      {/* <Drawer open={true} /> */}
      <Outlet />
    </>
  );
}

export default App;
