import { styled } from 'styled-components';
const drawerWidth = '200px';
const StyledDrawer = styled.div<{ $open: boolean }>`
  position: sticky;
  z-index: 2;
  left: calc(100% - ${drawerWidth});
  transform: translate(${drawerWidth});
  background-color: #a19d9d;
  height: fit-content;
  width: ${drawerWidth};
  animation-name: ${(props) => (props.$open ? 'slide-in' : 'slide-out')};
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  @keyframes slide-in {
    from {
      transform: translate(${drawerWidth});
    }
    to {
      transform: translate(calc(${drawerWidth} - 200px));
      left: calc(100% - ${drawerWidth});
    }
  }
  @keyframes slide-out {
    from {
      transform: translate(calc(${drawerWidth} - 200px));
    }
    to {
      transform: translate(${drawerWidth});
    }
  }
  .nav-list {
    position: relative;
    right: 0;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .nav-list > li {
    height: 40px;
    border: 1px solid black;
    width: 100%;
  }
`;

export default StyledDrawer;
