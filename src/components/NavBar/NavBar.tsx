import { useState, useEffect } from 'react';
import StyledNavBar from './StyledNavBar';
import { Drawer } from 'components/Drawer/index';
//mui components
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
//images
import MobileLogo from '../../assets/therapy-space-mobile.png';

export const links = ['home', 'about', 'services', 'specialties', 'resources', 'contact'];
interface DrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<OpenOptions>>;
}
export type OpenOptions = '' | 'open' | 'close';
export default function NavBar() {
  const [open, setOpen] = useState<OpenOptions>('');
  const [isMounted, setIsMounted] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    window.addEventListener('click', function clickOff() {
      if (signal.aborted) {
        window.removeEventListener('click', clickOff, false);
        return;
      }
      //if the user clicks outside of the window set open to closed
      //if (open === true) setOpen((prev) => false);
      // console.log('windoe', open);
    });
  }, [open]);
  function handleDrawerSwitch(prev: OpenOptions) {
    //if first mounted, toggling drawer sets drawer open
    if (prev === 'close' || prev === '') {
      setOpen('open');
    } else if (prev === 'open') {
      setOpen('close');
    }
  }
  console.log(open);
  return (
    <StyledNavBar>
      <img className="logo" src={MobileLogo} alt="NY Therapy Space" />
      <button onClick={() => handleDrawerSwitch(open)}>ho</button>
      <IconButton onClick={() => handleDrawerSwitch(open)} className="hamburger">
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer open={open} setOpen={setOpen} />
    </StyledNavBar>
  );
}
