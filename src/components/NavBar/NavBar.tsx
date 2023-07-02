import { useState, useEffect } from 'react';
import StyledNavBar from './StyledNavBar';
import { Drawer } from 'components/Drawer/index';
//mui components
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
//images
import MobileLogo from '../../assets/therapy-space-mobile.png';
//utils
import { OpenOptions, handleDrawerSwitch } from './utils-NavBar';
export const links = ['home', 'about', 'services', 'specialties', 'resources', 'contact'];


export default function NavBar() {
  const [open, setOpen] = useState<OpenOptions>('');
  useEffect(() => {
    //a click anywhere on screen dismisses drawer
    window.addEventListener(
      'click',
      () => {
        console.log('2');
        if (open !== '') setOpen('close');
      },
      false
    );
  }, [open]);

  return (
    <StyledNavBar>
      <img className="logo" src={MobileLogo} alt="NY Therapy Space" />
      <IconButton onClick={(e) => handleDrawerSwitch(e,open, setOpen)} className="hamburger">
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer open={open} setOpen={setOpen} />
    </StyledNavBar>
  );
}
