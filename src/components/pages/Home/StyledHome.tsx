import { styled } from 'styled-components';

export default styled.main`
  width: 100vw;
  .logo-adj-wrapper {
    text-align: right;
    font-weight: 300;
    position: fixed;
    top: 230px;
    right: 22px;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
  }
  .logo-adj-wrapper > button {
    margin-top: 15px;
  }
  .adj-item {
    /* outline: solid 1px red; */
    margin-top: 1px;
    margin-bottom: 1px;
    font-size: 1.2rem;
    font-weight: 100;
  }
  .adj-container {
    font-weight: 300;
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
    margin-bottom: 5px;
    top: 40px;
    left: 40px;
    transform: scale(0.5);
  }
`;
