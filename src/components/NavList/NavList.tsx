import { NavLink } from 'react-router-dom';
//components
import StyledNavList from './StyledNavList';
import StyledNavListItem from 'components/NavListItem/StyledNavListItem';
//utils
import { NavListItemType, navLinkList } from 'components/NavBar/utils-NavBar';
//constant
import { baseUrl } from 'project-constants';
//icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';

export default function NavList({activePage} : {activePage: string}) {
  return (
    <StyledNavList>
      {navLinkList.map((e) => {
        return (
          <StyledNavListItem key={e.label} $activeLink={activePage === e.path}>
            <NavLink to={baseUrl + e.path}>
              <span className='path-name'>{e.label}</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </NavLink>
          </StyledNavListItem>
        );
      })}
    </StyledNavList>
  );
}
