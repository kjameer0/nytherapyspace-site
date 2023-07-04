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
  .hor-pic {
    display: none;
  }
  .home-logo {
    position: relative;
    margin-bottom: 5px;
    top: 40px;
    left: 40px;
    transform: scale(0.5);
  }
  .adj-item {
    font-family: cormorant-infant-bold, sans-serif;
    font-size: 1.4rem;
  }
  .adj-item:last-child {
    font-family: cormorant-infant-reg, sans-serif;
  }
  @media screen and (min-width: 700px) {
    .vert-pic {
      display: none;
    }
    .hor-pic {
      position: relative;
      top: 20px;
      left: 30px;
      z-index: 100;
      display: block;
      width: 65%;
      height: auto;
    }
    .home-logo {
      display: none;
    }
    .logo-adj-wrapper {
      text-align: right;
      position: fixed;
      top: 190px;
      right: 22px;
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
    }
    .logo-adj-wrapper > button {
      margin-top: 25px;
    }
    .adj-item {
      text-align: right;
      font-size: 2rem;
      margin-top: 7px;
    }

  }
`;
