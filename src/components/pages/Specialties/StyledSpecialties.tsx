import { styled } from 'styled-components';
//booking box class is for the most general of boxes
//containing some text and a book now button
export default styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .booking-box {
    color: white;
    display: grid;
    width: 100%;
    margin-bottom: 1px;
    padding: 25px 30px 25px 30px;
    grid-template-columns: calc(100%);
    grid-template-rows: auto auto;
    justify-items: end;
  }
  .booking-box > p,
  .booking-box > button {
    padding: 0;
    margin: 0;
  }
  .booking-box p {
    font-size: 1.3rem;
    font-family: cormorant-infant-italic;
  }
  .booking-box button {
    background-color: white;
    color: black;
    justify-self: end;
    align-self: start;
  }
  .embark-box {
    min-height: 136px;
    height: clamp(136px, auto, 440px);
    text-align: right;
    background-color: #6c7c61;
  }
  .embark-box p {
    width: 90%;
    grid-column: 1;
    justify-self: end;
    grid-row: 1;
  }
  .embark-box button {
    grid-column: 1;
    grid-row: 2;
  }

  .impact-box {
    display: grid;
    color: black;
    padding: 10px 10px 10px 10px;
    background: #c0cabb;
    min-height: 83px;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    align-items: center;
  }
  .impact-box button {
    justify-self: center;
    align-self: center;
  }
  .relief-heading {
    margin-top: 0;
  }
  .empower-content {
    margin-top: 10px;
  }
  .empower-content .small-heading {
    margin-bottom: 5px;
  }
  .heal-content {
    padding: 20px;
    background: #6c7c61;
    color: white;
    margin-bottom: 0;
  }
  .growth-content {
    background-color: #eeefeb;
    padding: 20px;
    margin: 0;
  }
  .growth-content .large-heading {
    margin-top: 0;
  }
  .blank-wrapper {
    flex-basis: 100%;
    display: flex;
    justify-content: flex-start;
  }
  .build-content {
    flex-basis: 100%;
  }
  #cultural-trauma-diaspora .single-word {
    font-size: 2.4rem;
  }
  #teens-adolescents .single-word {
    line-height: 1;
  }
  @media screen and (min-width: 700px) {
    justify-content: space-between;
    .booking-box {
      justify-self: flex-end;
      flex-basis: 35%;
      padding: 40px;
    }
    .line-break {
      display: none;
    }
    .booking-box p {
      margin-top: 40px;
      line-height: 1.1;
      font-family: cormorant-infant-bold;
      font-size: 2rem;
    }
    .booking-box button {
      background: transparent;
      color: white;
      font-weight: 600;
      border: 1px solid white;
      padding: 40px auto;
    }
    .impact-box {
      height: auto;
      flex-basis: 20%;
      grid-template-rows: 60% 10%;
      font-size: clamp(1rem, 2.1vw, 2.2rem);
      padding-left: 10%;
      padding-right: 0;
      padding-bottom: clamp(10px, 2%, 40px);
      grid-template-columns: 65%;
      justify-items: center;
      row-gap: 10px;
    }
    .impact-box p {
      width: 160px;
      margin-top: 0;
    }
    .impact-box button {
      justify-self: start;
      margin-right: 20px;
    }
    .empower-content {
      margin-top: 30px;
      margin-right: 10px;
      padding: 0;
      flex-basis: 60%;
      justify-self: flex-start;
    }

    .empower-content > * {
      margin-left: 0;
    }
    .discover-content {
      flex-basis: 50%;
      padding-right: 0;
    }
    .discover-content p {
      width: 100%;
    }
    .embark-box {
      flex-basis: 30%;
      padding: 0px 30px 0px 10px;
    }
    .embark-box p {
      align-self: end;
      margin-top: 0;
      margin-bottom: 30px;
    }
    .booking-box > p {
      font-size: clamp(1rem, 2.1vw, 2.2rem);
    }
    .heal-content {
      position: relative;
      flex-basis: 55%;
      height: auto;
      padding: 40px 60px 40px 60px;
    }
    .heal-content .large-heading {
      margin-top: 0;
    }
    .blank-space {
      background: rgb(206, 208, 202);
      flex-basis: 40%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1;
    }
    .growth-content {
      display: grid;
      flex-basis: 100%;
      grid-template:
        [row1-start] 'title title' 50% [row1-end]
        [row2-start] 'para1 para3' 50% [row2-end]
        [row3-start] 'para2 para4' 50% [row3-end] / auto auto;
    }
    .growth-content .large-heading {
      text-align: center;
      grid-area: title;
      margin-bottom: 2%;
    }
    .growth-content p {
      margin-left: 30px;
    }
    .growth-content p:nth-of-type(1) {
      grid-area: para1;
    }
    .growth-content p:nth-of-type(2) {
      grid-area: para2;
    }
    .growth-content p:nth-of-type(3) {
      grid-area: para3;
    }
    .growth-content p:nth-of-type(4) {
      grid-area: para4;
    }
    .height-box {
      height: clamp(400px, 80vw, 600px);
    }
    section {
      align-self: center;
    }
    section p {
      line-height: 2 !important;
      margin: 0;
    }
  }
`;
