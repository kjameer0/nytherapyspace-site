import { useEffect, useState } from 'react';
import StyledDrawer from './StyledDrawer';
import { links } from 'components/NavBar/NavBar';
interface DrawerProps {
  open: boolean;
}
export default function Drawer({ open }: DrawerProps) {
  //if open
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('mounted');
  }, []);

  useEffect(() => {
    // window.addEventListener('', () => {});
    console.log(count);
  }, [count]);

  return (
    <StyledDrawer tabIndex={-1}>
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
