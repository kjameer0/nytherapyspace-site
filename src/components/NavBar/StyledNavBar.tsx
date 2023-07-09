import { styled } from 'styled-components';
const StyledNavBar = styled.nav<{ $isTransparent: boolean }>`
  position: sticky;
  display: flex;
  z-index: 2;
  background-color: white;
  top: 0px;
  min-height: 70px;
  height: 70px;
  width: 100%;
  .logo {
    visibility: ${(props) => (props.$isTransparent ? 'hidden' : 'visible')};
    visibility: 'visible';
    margin-left: 5%;
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
