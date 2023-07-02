import StyledDrawer from './StyledDrawer';
import NavBar, { links } from 'components/NavBar/NavBar';
import { DrawerProps } from '../NavBar/utils-NavBar';

export default function Drawer({ open, setOpen }: DrawerProps) {
  return (
    <StyledDrawer $open={open} tabIndex={-1}>
      <ul className="nav-list">
        {links.map((link) => (
          <li key={link} className="links-list">
            {link}
          </li>
        ))}
      </ul>
    </StyledDrawer>
  );
}
