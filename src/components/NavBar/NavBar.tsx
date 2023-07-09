import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//components
import StyledNavBar from './StyledNavBar';
import { Drawer } from 'components/Drawer/index';
import NavList from 'components/NavList';
//mui components
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
//images
import MobileLogo from '../../assets/therapy-space-mobile.png';
//utils
import { OpenOptions, handleDrawerSwitch } from './utils-NavBar';

export default function NavBar() {
  const [open, setOpen] = useState<OpenOptions>('');
  const [isTransparent, setIsTransparent] = useState(false);
  const location = useLocation();
  useEffect(() => {
    //logo needs to be invisible on home page
    //set transparency based on the current page
    if (location.pathname === '/') {
      setIsTransparent(true);
    } else {
      setIsTransparent(false);
    }
  }, [location]);
  useEffect(() => {
    //a click anywhere on screen dismisses drawer
    window.addEventListener(
      'click',
      function clickOff() {
        if (open !== '') setOpen('close');
        window.removeEventListener('click', clickOff, false);
      },
      false
    );
  }, [open]);
  //NavList activePage prop grabs the first part of URL pathname and
  //passes it to NavList
  return (
    <StyledNavBar $isTransparent={isTransparent}>
      <img className="logo" src={MobileLogo} alt="NY Therapy Space" />
      <NavList activePage={location.pathname.split('/')[1]}/>
      <IconButton onClick={(e) => handleDrawerSwitch(e, open, setOpen)} className="hamburger">
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer open={open} setOpen={setOpen} />
    </StyledNavBar>
  );
}
