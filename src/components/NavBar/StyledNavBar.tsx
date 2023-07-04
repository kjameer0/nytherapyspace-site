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
    visibility: hidden;
    margin-left: 10px;
    height: 69px;
    width: 69px;
  }
  .hamburger {
    position: absolute;
    right: 10px;
    top: 15%;
    border: 0px solid blue;
    color: black;
  }
  @media screen and (min-width: 700px) {
    margin-top: 30px;
    margin-left: 30px;
    .logo {
      visibility: visible;
    }
    .hamburger {
      display: none;
    }
  }
`;
export default StyledNavBar;
