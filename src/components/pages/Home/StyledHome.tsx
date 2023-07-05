import { styled } from 'styled-components';

export default styled.main`
  width: 100vw;
  position: relative;
  top: 0;
  display: flex;
  justify-content: flex-start;
  margin-top: -40px;
  .img-wrapper {
    flex-basis: 80%;
    width: 300px;
    z-index: 40;
  }
  .logo-adj-wrapper {
    margin-right: 30px;
    text-align: right;
    flex-basis: 20%;
    font-weight: 300;
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
    position: relative;
    display: block;
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
    margin-top: 0;
    .img-wrapper {
      display: none;
    }
    .vert-pic {
      display: none;
    }
    .hor-pic {
      display: block;
      position: relative;
      flex-basis: 65%;
      left: 0;
      width: 65%;
      height: auto;
    }
    .home-logo {
      display: none;
    }
    .logo-adj-wrapper {
      justify-self: flex-end;
      flex-basis: 35%;
      position: relative;
      right: 0;
      top: 0px;
      width: auto;
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
