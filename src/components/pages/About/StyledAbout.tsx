import { styled } from 'styled-components';

export default styled.main`
  h1 {
    text-align: center;
    font-family: cormorant-infant-bold;
    font-size: 1.8rem;
    line-height: 1;
    margin-bottom: 25px;
  }
  h1 b {
    font-family: cormorant-infant-reg;
  }

  .opening-blurb img {
    width: calc(104px / 1.15);
    height: calc(138px / 1.15);
    border: 1.5px solid #817e7e;
    float: left;
    margin: 0px 20px 0px 0px;
  }
  .opening-blurb {
    /* display: flex; */
    height: fit-content;
    border: 1px solid red;
  }
  #my-clinical-style {
    display: flex;
    /* margin-top: clamp(10px, 5%, 40px); */
    justify-content: flex-start;
    align-items: center;
  }
  #my-clinical-style .word-wrapper {
    margin-top: 3%;
    margin-left: 25px;
    left: 0;
  }
  #my-clinical-style .single-word {
    text-align: left;
  }
  .para-line-break {
    visibility: hidden;
  }
  @media screen and (min-width: 700px) {
    .opening-blurb img {
      margin-right: 80px;
      width: calc(104px / 0.6);
      height: auto;
    }
    .opening-blurb {
      margin-bottom: 40px;
      /* border: 1px solid red; */
      /* overflow: hidden; */
    }
    .opening-blurb p {
      columns: 2;
      column-gap: 30px;
      text-align: justify;
      line-height: 2.2;
    }
    .para-line-break {
      visibility: visible;
    }
  }
`;
