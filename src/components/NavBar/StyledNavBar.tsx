import { styled } from 'styled-components';
//figure out how to correctly size images
const StyledNavBar = styled.nav`
  position: sticky;
  top: 0px;
  border: 1px solid red;
  display: flex;
  min-height: 70px;
  height: 70px;
  .logo {
    margin-left: 10px;
    height: 69px;
    width: 69px;
  }
  .hamburger {
    position: absolute;
    right: 0;
    top: 15%;
    border: 0px solid blue;
    color: black;
  }
  @media screen and (min-width: 380px) {
  }
`;
export default StyledNavBar;
