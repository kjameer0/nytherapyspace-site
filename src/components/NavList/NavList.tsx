import StyledNavList from './StyledNavList';
import NavListItem from 'components/NavListItem/NavListItem';
//utils
import { NavListItemType, navLinkList } from 'components/NavBar/utils-NavBar';
export default function NavList() {
  return <StyledNavList>{navLinkList.map()}</StyledNavList>;
}
