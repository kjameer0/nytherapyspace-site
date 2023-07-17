import { styled } from 'styled-components';
const StyledNavBar = styled.nav<{ $isTransparent: boolean }>`
  position: sticky;
  display: flex;
  z-index: 2;
  background-color: white;
  background: ${(props) => (props.$isTransparent ? 'transparent' : 'white')};
  top: 0px;
  min-height: 70px;
  height: 70px;
  width: 100%;
  .logo {
    visibility: ${(props) => (props.$isTransparent ? 'hidden' : 'visible')};
    visibility: 'visible';
    margin-top: 5px;
    margin-left: 5%;
  }
  .logo > img {
    height: 69px;
    width: 69px;
  }
  .hamburger {
    position: absolute;
    right: 14px;
    top: 22%;
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
