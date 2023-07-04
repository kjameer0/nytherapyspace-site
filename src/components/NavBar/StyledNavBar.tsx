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
    margin-left: 13px;
    margin-top: 5px;
    height: 69px;
    width: 69px;
  }
  .hamburger {
    position: absolute;
    right: 4px;
    top: 22%;
    border: 0px solid blue;
    color: black;
  }
  @media screen and (min-width: 700px) {
    margin-bottom: 10px;
    .logo {
      visibility: visible;
    }
    .hamburger {
      display: none;
    }
  }
`;
export default StyledNavBar;
