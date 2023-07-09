import { NavLink } from 'react-router-dom';
//components
import StyledNavList from './StyledNavList';
import StyledNavListItem from 'components/NavListItem/StyledNavListItem';
//utils
import { NavListItemType, navLinkList } from 'components/NavBar/utils-NavBar';
//constant
import { baseUrl } from 'project-constants';
export default function NavList() {
  return (
    <StyledNavList>
      {navLinkList.map((e) => {
        return (
          <StyledNavListItem key={e.label}>
            <NavLink to={baseUrl + e.path}>{e.label}</NavLink>
          </StyledNavListItem>
        );
      })}
    </StyledNavList>
  );
}
