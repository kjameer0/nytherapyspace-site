import { useEffect, useState } from 'react';
import StyledDrawer from './StyledDrawer';
import { links } from 'components/NavBar/NavBar';
import { OpenOptions } from 'components/NavBar/NavBar';
interface DrawerProps {
  open: OpenOptions;
  setOpen: React.Dispatch<React.SetStateAction<OpenOptions>>;
}
export default function Drawer({ open, setOpen }: DrawerProps) {
  //if open
  const [count, setCount] = useState(0);

  return (
    <StyledDrawer $open={open} tabIndex={-1}>
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
