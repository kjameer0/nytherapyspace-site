import { styled } from 'styled-components';
//figure out how to correctly size images
const StyledNavBar = styled.nav`
  position: sticky;
  display: flex;
  z-index: 2;
  background-color: white;
  top: 0px;
  min-height: 70px;
  height: 70px;
  width: 100%;
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
