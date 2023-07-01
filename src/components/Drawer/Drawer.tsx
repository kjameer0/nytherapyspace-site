import { useEffect, useState } from 'react';
import StyledDrawer from './StyledDrawer';
import { links } from 'components/NavBar/NavBar';
interface DrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Drawer({ open, setOpen }: DrawerProps) {
  //if open
  const [count, setCount] = useState(0);

  return (
    <StyledDrawer className={open ? 'move-in' : 'move-out'} $open={open} tabIndex={-1}>
      <ul className="nav-list">
        {links.map((link) => (
          <li key={link} className="links-list">
            {link}
          </li>
        ))}
        <li>
          <button onClick={() => setCount((e) => e + 1)}>sdfsdfsdfd</button>
        </li>
      </ul>
    </StyledDrawer>
  );
}
