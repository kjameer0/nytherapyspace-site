import { styled } from 'styled-components';
//booking box class is for the most general of boxes
//containing some text and a book now button
export default styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .booking-box {
    color: white;
    display: grid;
    width: 100%;
    padding: 25px 30px 25px 30px;
    min-height: 136px;
    height: auto;
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
`;
