import StyledDrawer from './StyledDrawer';
import NavBar, { links } from 'components/NavBar/NavBar';
import { DrawerProps } from '../NavBar/utils-NavBar';

export default function Drawer({ open, setOpen }: DrawerProps) {
  // function handleSubClick
  function handleTestClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation()
    console.log('hi');

  }
  return (
    <StyledDrawer $open={open} tabIndex={-1}>
      <ul className="nav-list">
        {links.map((link) => (
          <button onClick={(e) => handleTestClick(e)} key={link} className="links-list">
            {link}
          </button>
        ))}
      </ul>
    </StyledDrawer>
  );
}
