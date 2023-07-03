import { styled } from 'styled-components';

export default styled.main`
  width: 100vw;
  .logo-adj-wrapper {
    position: fixed;
    top: 250px;
    right: 15px;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
  }
  .adj-item {
    margin-top: 2.1px;
    margin-bottom: 2.1px;
    font-size: 1.5rem;
    font-weight: 100;
  }
  .adj-container {
    display: flex;
    flex-direction: column;
  }

  .vert-pic {
    position: fixed;
    top: 10px;
    left: 15px;
    z-index: 100;
  }
  .home-logo {
    position: relative;
    margin-bottom: 10px;
    top: 40px;
    left: 25px;
    transform: scale(0.6);
  }

`;
