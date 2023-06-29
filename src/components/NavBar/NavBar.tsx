import { useState } from 'react';
import StyledNavBar from './StyledNavBar';
import { Drawer } from 'components/Drawer/index';
//mui components
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
//images
import MobileLogo from '../../assets/therapy-space-mobile.png';

export const links = ['home', 'about', 'services', 'specialties', 'resources', 'contact'];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <StyledNavBar>
      <img className='logo' src={MobileLogo} alt="NY Therapy Space" />
      <IconButton className='hamburger'>
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer></Drawer>
    </StyledNavBar>
  );
}
